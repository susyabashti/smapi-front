import { Wrapper } from "../Wrapper/Wrapper";

interface ListProps {
    products: { id: number; name: string; price: number }[];
}

interface ProductProps {
    pos: number;
    name: string;
    price: number;
}

export const ProductList = ({ products }: ListProps) => {
    return (
        <Wrapper className="w-full text-left mt-6">
            <table className="table-fixed text-center w-full rounded-lg">
                <thead className="border-b-2">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((value, index) => (
                        <Product
                            key={value.id}
                            pos={index}
                            name={value.name}
                            price={value.price}
                        />
                    ))}
                </tbody>
            </table>
        </Wrapper>
    );
};

const Product = ({ pos, name, price }: ProductProps) => (
    <tr className="odd:bg-gray-100">
        <td>{pos + 1}</td>
        <td className="overflow-y-auto">{name}</td>
        <td>${price}</td>
    </tr>
);
