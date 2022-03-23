import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category)
        .then( imgs => {
            setState({
                data: imgs,
                loading: false  
            })
        })
    }, [ category ])

    return state; //O sea los datos, el arreglo ya sea vacío o lleno, y el loading ya sea true o false
};