import Footer from "components/shared/Footer";
import NavBar from "components/shared/NavBar";
import Dashboard from "pages/StatsDashboard";
import Home from "pages/Home";
import ProductsList from "pages/ListingProduct";
import CategoryList from "pages/ListingCategory";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductProfile from "pages/ProductProfile";
import CategoryProfile from "pages/CategoryProfile";
import { SaveProduct } from "pages/ProductOptions";


const PageRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
             
                <Route path="/product/list" element={<ProductsList />} />
                <Route path="/product/add" element={<SaveProduct />} />  

                <Route path="/category/list" element={<CategoryList/>} />
                <Route path="/categories-stats" element={<Dashboard />} />
                <Route path="/product">
                        <Route path=":productId" element={<ProductProfile />} />
                    </Route>

                    <Route path="/category">
                        <Route path=":categoryId" element={<CategoryProfile />} />
                    </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default PageRoutes;