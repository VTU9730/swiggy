import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()

    const {status, statusText} = error;

    console.log(error);

    return(
        <div>
            <h1>Oops!</h1>
            <h3>Something went wrong.</h3>
            <h5>{status}</h5>
            <h6>{statusText}</h6>
        </div>
    )
}

export default Error;