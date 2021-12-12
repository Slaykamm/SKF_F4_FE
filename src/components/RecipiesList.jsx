import React from 'react';
import RecipieItem from './RecipieItem';

const RecipiesList = ({recipies, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: "20px"}}> Список рецептов на {title} </h1>
            {recipies.map((recipie, index) =>
            
            <RecipieItem remove={remove} number={index +1  }  key={recipie.id} recipie={recipie}/>

            )}



            
        </div>
    );
};

export default RecipiesList;