import {useSearchParams, useLocation} from "react-router-dom";

export const ProductList = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    console.log(searchParams.get("keyword"), searchParams.get("instock"), searchParams.get("limit"));
    console.log(location);
    return (
        <main>
            <div className="productList">ProductList</div>
        </main>
    )
}