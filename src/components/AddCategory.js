import React, { useState } from "react";
import PropTypes from 'prop-types';

// export const AddCategory = (props) => { Esta fue mi solución, es correcta pero no común
export const AddCategory = ({setCategories}) => { //El profesor utilizó desestructuración que es más común

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //props.setCategories([...props.categories, inputValue]); //Esta fue mi solución

        //Solución del profe, así no necesitamos el parametro categories, que también se podría pedir si hiciera falta
        // setCategories(cats => [inputValue, ...cats]);
        setCategories(() => [inputValue]); //Esto lo modifiqué para no agregar categorias sino reemplazar
        setInputValue('');
    }

    return (
        <form>
            <input
                type="text"
                placeholder="¿De qué te gustaría encontrar GIFs?"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Buscar</button>
        </form>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired //Requerido
    //setCategories: PropTypes.func //Opcional
};