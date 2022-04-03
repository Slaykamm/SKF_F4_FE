import React, {useState, useEffect} from "react";
import { useRecipies } from "../hooks/useRecepies";

import RecipiesList from "./RecipiesList";
import RecipieService from '../API/RecipieService'
import Loader from "./UI/Loader/Loader";

import '../styles/App.css'
import axios from "axios";
import { useFetching } from "../hooks/useFetching";
import MySelect from "./UI/select/MySelect";
import Header from "./Header";
import getAll from '../API/RecipieService'

function Main() {

  const [recipies, setRecipies] = useState([])
  const [category, setCategory] = useState(0)

  const [categoryChoise, setCategoryChoice] = useState(
    {'2': "первое",
    '3': "второе",
    '4': "десерты",
    '5': "напитки",
    '6': "гарниры"}
)


  const [filter, setFilter] = useState({sort: '', query: ''})
  const [fetchRecepies, isRecepiesLoading, recepieError] = useFetching( async () => {
    const response = await RecipieService.getAll();
    setRecipies(response.data)
  })

  const sortedAndSearchedRecepies = useRecipies(recipies, filter.sort, filter.query);

  useEffect(() => {
    fetchRecepies()
  },[filter])


  useEffect(() => {
    fetchCategoryReceipies(category)
  }, [category])
  
  function receiveCategories(event){
    setCategory(event)
  }


  async function fetchCategoryReceipies(category) {
    const response = await axios.get(`http://127.0.0.1:8000/api/recipiesAPI/?category=${category}`)
    setRecipies(response.data)
  }
  return (
    <>
      <div className="App" style={{backgroundColor: 'thistle'}}>
        
        <Header/>
        <h1 style={{display:'flex', justifyContent:'center'}}>Вид Блюда:    
          <div style={{color:'red'}}> 
        
              <MySelect
                value = {category}
                onChange={e => receiveCategories(e)}
                defaultValue= "Выберите категорию"

                options={[
                  {value: '', name: "Выберите категорию"},
                  {value: '2', name: "Первое"},
                  {value: '3', name: "Второе"},
                  {value: '4', name: "Десерт"},
                  {value: '5', name: "Напиток"},
                  {value: '6', name: "Гарнир"}
                ]}
              />
          </div>
        </h1> 

        {category 
        ?   <div>
              <h1> Выбрана категория {categoryChoise[category]}</h1>
            </div>
        :  <h1 style={{marginTop:'50px'}}>Выберите категорию. Отображены все рецепцы в базе</h1>
        } 

            {recepieError &&
              <h1>Произошла ошибка ${recepieError}</h1>
            }
            {isRecepiesLoading
            ? <div style={{display:"flex", justifyContent:'center', marginTop: '50px'}}> <Loader/> </div>
            : <RecipiesList  recipies={sortedAndSearchedRecepies} title={categoryChoise[category]}/>
            }
      </div>
    </>
  );
}

export default Main;

// для активации SWAGGER надо активировать строчку внизу. и все будет ок.
//export default App = () => <SwaggerUI url='http://127.0.0.1:8000/openapi' />