import {hot} from "react-hot-loader/root";
import React from "react";

const Root = () =>
{
    const hotLoad : string = "Hot Load";


    return(
        <div>My REACT App with {hotLoad}</div>

    );
};

export default hot(Root);