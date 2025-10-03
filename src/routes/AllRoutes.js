import {Routes, Route, Navigate} from "react-router-dom";
import {Home, ProductList, ProductDetail, Contact, ContactIn, ContactEu, ContactUs, Admin, PageNotFound} from '../pages';

export const AllRoutes = () => {
    const isAdmin = true;
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="products" element={<ProductList/>} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="contact" element={<Contact />}>
                    <Route path="in" element={<ContactIn/>} />
                    <Route path="eu" element={<ContactEu/>} />
                    <Route path="us" element={<ContactUs/>} />
                    <Route path="*" element={<ContactUs/>} />
                </Route>
                <Route path="admin" element={ isAdmin ? <Admin /> : <Navigate to="/" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}