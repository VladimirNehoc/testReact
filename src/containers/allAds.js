import React from "react"

import Delete from "../components/delete"
import Change from "../components/change"
import Add from "../components/add"

let AllAds = props => {
    const { ads, deleteAd} = props;
    
    return(
        <div>
            <Add />
            {
                ads.sort((a, b) => a.id > b.id ? -1 : 1).map(ad => {
                    return(
                        <div className="post" key={ad.id}>
                            <Delete id={ad.id} deleteAd={deleteAd} />
                            <Change id={ad.id}/>
                            <img className="post__image" src={ad.image} alt="картинка" />
                            <div>
                                <span className="post__title">{ad.title}</span>
                                <p className="post__description">{ad.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllAds