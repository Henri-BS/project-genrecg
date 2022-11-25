import { useParams } from "react-router-dom";
import "./styles.css"
import { ProductHistoryByProduct } from "pages/Listings/ProductListing";
import { MeasureInfo } from "components/container/Card/MeasureCard";
import { AddProduct, ProductFormEdit } from "components/container/Form/ProductForm";
import { QuantityProductChart } from "components/dashboard/Chart/ProductCharts";
import NavBar from "components/shared/NavBar";
import Footer from "components/shared/Footer";
import { ProductMeasureList } from "pages/Listings/MeasureListing";
import { ProductMenuBar, ProductSideBar } from "components/container/Bar/ProductBar";
import ProductDataTable from "components/dashboard/DataTable/ProductDataTable";

//Product profile 
export function ProductProfile() {
  const params = useParams();

  return (
    <>
      <NavBar />
      <div className="profile row">
        <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-0">
          < ProductSideBar productId={`${params.productId}`} />
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-xl-8  p-4">
          <ProductMenuBar productId={`${params.productId}`} />
            <h1 className="p-4">Estatísticas do Produto</h1>
            <div className="chart-box">
              <div className="container-chart">
                <h5 className="text-center">Quantidade do Produto por Data</h5>
                <QuantityProductChart productId={`${params.productId}`} />
              </div>
            </div>
            <ProductHistoryByProduct productId={`${params.productId}`} />
          </div>
        
      </div>
      <Footer />
    </>
  );
}



//Save product page
export function SaveProduct() {

  return (
    <div className="container p-0">
    <div className="container-blur">
      <AddProduct />
    </div>
    </div>
  );
}

//Update product page
export function UpdateProduct() {

  const params = useParams();

  return (
    <div className="container-blur">
      <ProductFormEdit productId={`${params.productId}`} />
    </div>
  );
}

//Measure profile
export function MeasureProfile() {

  const params = useParams();

  return (
    <>
      <NavBar />
      <div className="container-blur">
        <div>
          <MeasureInfo measureId={`${params.measureId}`} />
        </div>
        <ProductMeasureList measureId={`${params.measureId}`} />
      </div>
      <Footer />
    </>
  );
}

//Product Dashboard
export function ProductDashboard() {

  return (
    <>
    <NavBar />
      <div className="container">
        <h1 className=" py-4">Registros de Alterações dos Produtos</h1>
        <ProductDataTable />
      </div>
      <Footer />
    </>
  );
}

