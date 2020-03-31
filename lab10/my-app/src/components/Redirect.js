import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Redirect = (props) => {
    const handleRedirectClick = () => {
        const { history } = props;
        if (history) {
            history.push("/")
        }
        else console.log("history not found in props")
    }
    return (
        <button onClick={handleRedirectClick}>Redirect</button>
    )
}

export default Redirect;