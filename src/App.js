import React, {useState, useMemo} from "react";
import Header from "./components/Header";
import ReceipeFIlter from "./components/ReceipeFIlter";
import ReceiptForm from "./components/ReceiptForm";
import RecipieItem from "./components/RecipieItem";
import RecipiesList from "./components/RecipiesList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'


function App() {

  const [recipies, setRecipies] = useState([
    {id:1, title:'Борщик', body:'Рецепт варения Борщика: вода мясо свекла. И женщина. пока не сварила не выпускать с кухни! :)'},
    {id:2, title:'Макароны', body:'Макароны, вода, кастрюля и женщина. пока не сварила не выпускать с кухни! :)'},
    {id:3, title:'Жаркое', body:'Олень, нож, сковорода, соль и женщина. Чтобы сидела рядом! :)'}

  ])

  const [filter, setFilter] = useState({sort: '', query: ''})


  const sortedReceipes = useMemo(()=>{
    console.log("sorted")
    if (filter.sort) {
      return [...recipies].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return recipies;

  }, [filter.sort, recipies])


  const sortedAndSearchedRecepies = useMemo(()=>{
    return sortedReceipes.filter(recipie => recipie.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedReceipes])



  const createReceipt = (newRecipie) => {
    setRecipies([...recipies, newRecipie])
  }

  const removeReceipt = (recipie) => {
    setRecipies(recipies.filter(p => p.id !== recipie.id))
  }



  return (

    <div className="App">
      



      <Header/>
      <ReceiptForm create ={createReceipt}/>
      
      <hr style={{margin: "10px 0 "}} />

      <ReceipeFIlter 
        filter={filter}
        setFilter={setFilter}
        
      />


    {sortedAndSearchedRecepies.length 
      ? <RecipiesList remove={removeReceipt} recipies={sortedAndSearchedRecepies} title="Второе"/>
      : <h1 style={{textAlign: 'center'}}> В базе отсутствую рецепты данного вида</h1>
    
    }

    </div>
  );
}

export default App;
