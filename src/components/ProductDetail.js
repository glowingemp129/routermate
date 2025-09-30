const {useParams} = require("react-router-dom");

export const ProductDetail = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>ProductDetail - {params.id}</div>
    )
}