import { CategorySideBar } from "components/container/Bar/CategoryBar";
import { AddCategoryStats } from "components/container/Form/CategoryForm";
import { CategoryStatsChart } from "components/dashboard/Chart/StatsChart";
import { ProductCategoryList } from "pages/Listings/CategoryListing";
import { useParams } from "react-router-dom";
import "./styles.css";

export function CategoryProfile() {

  const params = useParams();
  return (
    <>
      <div className="profile row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-0">
          <CategorySideBar categoryId={`${params.categoryId}`} />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-8">
          <ProductCategoryList categoryId={`${params.categoryId}`} />
        </div>
      </div>
    </>
  );
}

export function CategoryStatsDashboard() {
  return (
          <CategoryStatsChart />
  );
}