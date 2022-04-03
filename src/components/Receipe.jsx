import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router';
import MyButton from './UI/button/MyButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

function Receipe() {
    const [receip, setReceip] = useState()
    const params = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
            const response = axios.get(`http://127.0.0.1:8000/api/recipiesAPI/${params.id}`)
            response.then(res =>{
                if (res.data){
                    setReceip(res.data)
                }
            })
    },[params.id])
 
    function goToMain(){
        navigate('/main')
    }

    return (
        <>
            <div className="App"
                style={{backgroundColor: 'thistle'}}
            >
                        
                <Header/>
                <MyButton 
                    style={{marginTop:'5rem', marginLeft:'10%', cursor:'Pointer'}}
                    onClick={e => goToMain()}
                >
                    На главную
                </MyButton>
                    
                <h1 style={{display:'flex', justifyContent:'flex-start', paddingTop:'5rem', paddingLeft:'10%'}}>Вид Блюда: </h1>    
                <div 
                    style={{color:'red'}}> 
                </div>   
                <div style={{display:'flex', justifyContent:'center', marginTop:'5rem', width:'90%', paddingLeft:'10%'}}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>

                            <th>Наименование блюда</th>
                            <th>Рецепт приготовления</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receip && 
                                <tr>
                                <td>{receip.title}</td>
                                <td>{receip.body}</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </div>

        </>


    )
}

export default Receipe
