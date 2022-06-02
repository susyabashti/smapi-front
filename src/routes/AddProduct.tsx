import { Fragment, useCallback, useRef, useState } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { Text } from "../components/Text/Text";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const AddProduct = () => {
    const nameRef = useRef<HTMLInputElement>(null)!;
    const priceRef = useRef<HTMLInputElement>(null)!;
    const [message, setMessage] = useState("");
    const [buttonState, setButton] = useState(false);

    const addItem = useCallback(() => {
        if (nameRef.current === null || priceRef.current === null) return;

        const name = nameRef.current.value;
        const price = priceRef.current.value;

        if (name === "" || price === "") {
            setMessage("Both fields are required.");
        }

        setButton(true);
        let message: string;

        fetch(import.meta.env.VITE_FETCH_URL, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:
                "name=" +
                encodeURIComponent(name) +
                "&price=" +
                encodeURIComponent(price),
        })
            .then((response) => {
                if (response.status === 200) {
                    nameRef.current!.value = "";
                    priceRef.current!.value = "";
                }
                return response.json();
            })
            .then((data) => (message = data.msg))
            .catch(
                () =>
                    (message =
                        "An error occured while trying to add your product. Try again later.")
            )
            .finally(() => {
                setMessage(message);
                setButton(false);
            });
    }, [nameRef, priceRef]);

    return (
        <Fragment>
            <Text element="h1" className="text-3xl text-center">
                Add Products
            </Text>
            <Wrapper className="w-full lg:w-1/3 mx-auto flex flex-col items-center">
                <Text element="code" className="mb-2 text-center">
                    Use * to see all products, or search specific name.
                </Text>
                <Wrapper className="flex flex-col gap-2 w-fit">
                    <Input
                        rfc={nameRef}
                        inputName="Product Name"
                        type="text"
                        className="border-2 rounded-md focus:outline-none px-2"
                    />
                    <Input
                        rfc={priceRef}
                        inputName="Price"
                        type="text"
                        className="border-2 rounded-md focus:outline-none px-2"
                    />
                    <Button
                        updateFn={addItem}
                        text="Add Product"
                        className="bg-green-700 hover:bg-green-600 disabled:bg-gray-300 text-white disabled:text-black transition-colors px-4 rounded-md"
                        disabled={buttonState}
                    />
                </Wrapper>
                {message && (
                    <Text element="code" className="my-2">
                        {message}
                    </Text>
                )}
            </Wrapper>
            <Wrapper className="w-full lg:w-1/3 mx-auto flex flex-col items-center"></Wrapper>
        </Fragment>
    );
};
