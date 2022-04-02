import React from 'react';
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Loader from './loader/Loader';
function App() {
    const [image, setImage] = useState([]);
    const clientId = "t4wcBeTj3Xlh9YO4rD3Pj-Az_OtscHG1aqGpdntITi4";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {setImage(event.target.value)};
    const handleSubmit = () => {
    console.log(image);
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
    axios.get(url).then((response) => {
    console.log(response);
     setResult(response.data.results);
    });
   
    }
    return (
    <div className="app">
    <div className="heading">
    <h1>React Image Search Using Unsplash API.</h1>
    </div>
    <div className="input">

    <input onChange={handleChange } type="text" name="image"  placeholder="Search for images"/>
        
    </div>
    <button onClick={handleSubmit} type="submit">Search</button>
   
    <div className="result">
        
        {result.map((image) => (
        <>
        <div className="card" >
            <img src={image.urls.thumb} key={image.Id} /> 
            
        </div>         
        </>  
        ))}
        <div> <Loader/> </div>
    </div>
    </div>
    );
}
export default App;

