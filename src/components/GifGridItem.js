import React from "react";

export const GifGridItem = ({title, url, setUrl, setModalClass}) => {

    const createModal = (e) => {
        let newUrl = e.target.currentSrc;
        if(newUrl != null){
            setUrl(newUrl)
            setModalClass("modal")
        }
    };

    return (
        <div 
            className="card"
            onClick={createModal}
        >
            <img 
                src={url} 
                alt={title}
                className="card-img"
            />
            <p>{title}</p>
        </div>
    )
}