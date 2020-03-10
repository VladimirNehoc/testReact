import React from "react"
import { Link } from "react-router-dom"

let Change = props => {
    const { id } = props;
    let url = `/edit-ad/:${id}`;
    return (
        <Link to={url}>
            <button className="post__change">Edit</button>
        </Link>
    )
}

export default Change;