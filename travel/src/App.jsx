import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import data from './data'
import './App.css'


export default function App(){
   
   const tripData = data.map(item => {
       return(
           <Main 
                key= {item.id}
                item={item}
            />
       )
   })
    
    return (
        <div>
            <Navbar />
            {tripData}
        </div>
    )
}