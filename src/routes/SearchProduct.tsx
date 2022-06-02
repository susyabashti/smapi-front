import { Fragment, useCallback, useRef, useState } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { ProductList } from "../components/ProductList/ProductList";
import { Text } from "../components/Text/Text";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const SearchProduct = () => {
    const [products, setProducts] = useState<
        { id: number; name: string; price: number }[]
    >([]);
    const [message, setMessage] = useState<string>("");
    const [buttonState, setButton] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const getItems = useCallback(() => {
        if (inputRef.current === null) return;
        if (inputRef.current.value === "") {
            setMessage("You didn't enter anything.");
            return;
        }

        setProducts([]);
        setMessage("Searching...");
        setButton(true);

        const search_input = inputRef.current.value;
        inputRef.current.value = "";

        let fetch_url = "https://smapi.up.railway.app/api/products/";
        if (search_input !== "*") {
            fetch_url += search_input;
        }

        let message: string;

        fetch(fetch_url, {
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                const p_count = data.length;
                if (!p_count) {
                    message = "No results were found.";
                } else {
                    message = `Found ${p_count} results with the term: ${search_input}`;
                }
            })
            .catch(() => (message = "There was an error retrieving the items."))
            .finally(() => {
                setMessage(message);
                setButton(false);
            });
    }, [setMessage, setProducts, inputRef]);

    return (
        <Fragment>
            <Text element="h1" className="text-3xl text-center">
                Search Products
            </Text>
            <Wrapper className="w-full lg:w-1/3 mx-auto flex flex-col items-center">
                <Text element="code" className="mb-2 text-center">
                    Use * to see all products, or search specific name.
                </Text>
                <Wrapper className="flex gap-2 w-fit">
                    <Input
                        rfc={inputRef}
                        type="text"
                        className="border-2 rounded-md focus:outline-none px-2"
                    />
                    <Button
                        updateFn={getItems}
                        text="Search"
                        className="bg-green-700 hover:bg-green-600 disabled:bg-gray-300 text-white disabled:text-black transition-colors px-4 rounded-md"
                        disabled={buttonState}
                    />
                </Wrapper>
                {message && (
                    <Text element="code" className="my-2">
                        {message}
                    </Text>
                )}
                {products && <ProductList products={products} />}
            </Wrapper>
        </Fragment>
    );
};
