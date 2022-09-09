import axios from "axios";
import MeasureInfo from "components/container/MeasureInfo";
import { ProductFormAdd } from "components/container/ProductFormAdd";
import { ProductFormEdit } from "components/container/ProductFormEdit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "utils/requests";
import "./styles.css"

export function SaveProduct() {
    return (
        <div className="container-blur">
            <ProductFormAdd />
        </div>
    )
}

export function UpdateProduct() {
   
    return (
        <div className="container-blur">
            <ProductFormEdit />
        </div>
    )
}

export function MeasureProfile() {

    const params = useParams();

    return (
        <div className="container-blur">
            <MeasureInfo measureId={`${params.measureId}`} />
        </div>
    )
}
