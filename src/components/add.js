import React from "react";
import { Link } from "react-router-dom";

let Add = () => {
    return(
        <Link to="/create-add">
            <button className="post__create">╋</button>
        </Link>
    )
}

export default Add;