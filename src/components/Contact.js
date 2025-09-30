import {useNavigate} from "react-router-dom";

export const Contact = () => {

    const Navigate = useNavigate();

    const handleSubmit = () => {
        console.log("handleSubmit");

        return Navigate("/");
    }
    return (
        <>
            <div className="component">Contact</div>
            <button onClick={handleSubmit}>Back To Home</button>
        </>
    )
}