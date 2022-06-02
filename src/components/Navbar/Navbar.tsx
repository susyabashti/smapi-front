import { Link } from "react-router-dom";
import { Text } from "../Text/Text";
import { Wrapper } from "../Wrapper/Wrapper";

export const Navbar = () => (
    <Wrapper className="container-fluid py-5 border-b-2">
        <Wrapper className="container mx-auto px-5 flex justify-between">
            <Text element="h1" className="text-xl font-medium">
                Simple API
            </Text>
            <Link to="/">Search</Link>
            <Link to="add">Add</Link>
            <a href="https://github.com/susyabashti/smapi-backend">
                <Text
                    element="h1"
                    className="text-lg font-medium transition hover:text-gray-500 active:text-gray-200"
                >
                    Github
                </Text>
            </a>
        </Wrapper>
    </Wrapper>
);
