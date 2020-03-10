import React from "react"

let Delete = props => {
    const { id, deleteAd } = props;

    let removeAd = () => {
        fetch(`https://5e5f623ab5c43c0014ef984c.mockapi.io/ad/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json()).then(result => {
            deleteAd(result.id)
        })
        .catch(err => console.log(err));
    }

    return (
        <button className="post__delete" onClick={() => removeAd()}>╳</button>
    )
}

export default Delete;