import axios from "axios";
import Pagination from "components/shared/Pagination";
import ProductCard from "components/container/ProductCard";
import { useEffect, useState } from "react";
import { PageProduct } from "types/product";
import { BASE_URL } from "utils/requests";
import "./styles.css"
import { Link } from "react-router-dom";

function ProductsList() {

    const [pageNumber, setPageNumber] = useState(0);
    const [productPage, setProductPage] = useState<PageProduct>({
        content: [],
        first: true,
        last: true,
        number: 0,
        totalPages: 0,
        totalElements: 0,
        numberOfElements: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/product/list?page=${pageNumber}&size=12`)
            .then(response => {
                const data = response.data as PageProduct;
                setProductPage(data);
            });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }
    return (
        <>
            <div className="container">
            <div className="header-container">             
                <h2>Lista de Produtos</h2>
                <Link to="/product/add"> 
                <h3 className="gerencg-btn">Adicionar</h3>
                </Link>
                </div>
                <div className="pagination-container-menu">
                    <div className="pagination-item">
                        <Pagination page={productPage}
                            onPageChange={handlePageChange} />
                    </div>
                </div>
                <div className="list-container row">
                    {productPage.content?.map(product => (
                        <div key={product.id} className="col-sm-6 col-lg-5 col-xl-4 mb-3">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductsList;