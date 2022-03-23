import React, { useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    //Con los dos puntos (:) le cambiamos el nombre a la desestructuración
    //data:images, data ahora la referenciamos como images
    const { data:images, loading } = useFetchGifs(category);

    const [url, setUrl] = useState("");
    const [modalClass, setModalClass] = useState("d-none");
    const [popoverClass, setPopoverClass] = useState("d-none");

    const cerrarModal = () => {
        setModalClass("d-none");
    };

    const copyLink = () => {
        navigator.clipboard.writeText(url);
        setPopoverClass("popover")

        setTimeout(()=>{
            setPopoverClass("d-none")
        },2000);

    };

    return (
        <>
            <h2>{category}</h2>
            {loading && <p>Cargando...</p>}
            { images.length != 0 ? 
            <div className="card-grid">
                {
                    images.map(img =>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                            setUrl={setUrl}
                            setModalClass={setModalClass}
                        />
                    ))
                }

                <div className={modalClass}>
                    <img 
                        src={url} 
                        alt="modal-img" 
                        className="modal-img"
                    />
                    <br/>
                    <div>
                        <button onClick={copyLink}>Copiar enlace</button>
                        <button onClick={cerrarModal}>Cerrar</button>
                    </div>
                    <div className={popoverClass}>
                        <p>¡Enlace copiado!</p>
                    </div>
                </div>

            </div>
            : category != '' ?
            <p>No se encontraron imagenes</p>
            :
            <h3>¡Indica de qué categoría te gustaria encontrar GIFs!</h3>
            }
        </>
    )
};