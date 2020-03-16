import {hot} from "react-hot-loader/root";
import React from "react";

const Root = () =>
{
    const hotLoad : string = "HotLoad";


    return(
        <div>My REACT App with some {hotLoad}</div>

    );
};

export default hot(Root);