import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import RecipieItem from './RecipieItem';
import { useNavigate } from 'react-router';


const RecipiesList = ({recipies, title, remove}) => {
    let navigate = useNavigate();

    function pickOneRecepie(e, id){
        e.preventDefault()
        navigate(`receipe/${id}`)
    }

    if (!recipies.length){
        return  (
            <h1 style={{textAlign: 'center'}}>
                Таких рецептов нет!
            </h1>
        )
    }


    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: "20px"}}>  </h1>
            <TransitionGroup>
            {recipies.map((recipie, index) =>

                <CSSTransition
                key={recipie.id}
                timeout={500}
                classNames="recipie"
            >
            
                <RecipieItem 
                    remove={remove} 
                    number={index +1}
                    recipie={recipie}
                    pickOneRecepie={pickOneRecepie}
                />

            </CSSTransition>

            )}

            </TransitionGroup>
           



            
        </div>
    );
};

export default RecipiesList;