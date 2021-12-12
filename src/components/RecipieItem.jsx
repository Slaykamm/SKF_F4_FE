import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';

const RecipieItem = (props) => {



    return (
        <div className="recipe">
            <div className="recipe__content">
            <strong>{props.number}. Наименование: {props.recipie.title} </strong>
                <div>
                    {props.recipie.body}
                </div>
            </div>
            <div className="recipe__btns">
                <MyButton onClick={() => props.remove(props.recipie)}>
                    Удалить грязные подробности
                </MyButton>
            </div>

            
        </div>
    );
};

export default RecipieItem;