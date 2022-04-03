import React from 'react';

const RecipieItem = ({pickOneRecepie, ...props}) => {


    return (    
        
        <div 
            className="recipe"
            onClick={e => pickOneRecepie(e, props.recipie.id)}
            style={{cursor:'Pointer'}}

        >
            <div className="recipe__content">
            <strong>{props.number}. Наименование: {props.recipie.title} </strong>
                <div>
                    {props.recipie.body}
                </div>
            </div>
            <div className="recipe__btns">

            </div>

            
        </div>
    );
};

export default RecipieItem;