import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>Ooops!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}