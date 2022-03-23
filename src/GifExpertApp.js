import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     setCategories( categories.concat('Watashi') ); //Esta es mi solución
    //     //setCategories( [...categories, 'watashi'] ); //Esta fue la primera solución de Fernando Herrera
    //     //setCategories(cats => [ ...categories, 'watashi' ] ); //Esta fue la solución alternativa.
    // };

    return(
        <>
            <div className="title_container">
                <h1>GIF Searcher App</h1>
                <br />
            </div>
            {/* <AddCategory setCategories={setCategories} categories={categories}/> Esta fue mi solución */}
            <AddCategory setCategories={setCategories}/> {/* Esta fue la del profesor */}
            <br />
            <hr/>
            {/* {
                categories.map( category => {
                    // return <li key={category}>{category}</li> //Esto era para hacer el return local
                    //Con esto hacemos ese return desde un componente
                    return <GifGrid key={category} category={category} />
                })
            } */}
            <GifGrid key={categories} category={categories} />
        </>
    );
};

export default GifExpertApp;