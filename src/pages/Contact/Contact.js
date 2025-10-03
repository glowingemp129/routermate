import {useNavigate, Outlet} from "react-router-dom";

export const Contact = () => {

    const Navigate = useNavigate();

    const handleSubmit = () => {
        console.log("handleSubmit");

        return Navigate("/");
    }
    return (
        <main>
            <div className="component">Contact</div>
            <Outlet />
            <button onClick={handleSubmit}>Back To Home</button>
        </main>
    )
}