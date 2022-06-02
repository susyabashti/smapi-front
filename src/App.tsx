import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { SearchProduct } from "./routes/SearchProduct";
import { AddProduct } from "./routes/AddProduct";
import { Footer } from "./components/Footer/Footer";

export const App = () => (
    <div className="flex flex-col h-screen">
        <Navbar />
        <Wrapper className="grid grow content-evenly container mx-auto">
            <Routes>
                <Route path="/" element={<SearchProduct />} />
                <Route path="add" element={<AddProduct />} />
            </Routes>
        </Wrapper>
        <Footer />
    </div>
);
