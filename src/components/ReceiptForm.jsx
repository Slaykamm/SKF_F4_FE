import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const ReceiptForm = ({create}) => {


    const [receipt, setReceipt] = useState({title:'', body: ''});



    const addNewReceipe = (e) => {
        e.preventDefault()
    
        const newRecipie = {
            ...receipt, id: Date.now()
        }
        create(newRecipie)
        setReceipt({title:'', body: ''})
      }
    
  


    return (
        <div>
            <form>
    
                <MyInput
                    value = {receipt.title}          
                    onChange={event => setReceipt({...receipt, title: event.target.value})} 
                    type="text" 
                    placeholder="Наименование рецепта"
                    />

                <MyInput 
                    value = {receipt.body}
                    onChange={event => setReceipt({...receipt, body:event.target.value})}
                    type="text" 
                    placeholder="Описание рецепта"
                    />

                <MyButton onClick={addNewReceipe}> SubmitButton</MyButton>


        </form>
    </div>

    );
};

export default ReceiptForm;