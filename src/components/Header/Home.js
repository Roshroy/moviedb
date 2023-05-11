import React,{useState, useEffect} from "react";
//API



//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";
// Components
 
//Hook 
// import { useHomeFetch } from "../../Hooks/useHomeFetch";
import { useHomefetch } from "../../Hooks/useHomeFetch";
//image


const Home =  () =>{
   
   const { state, loading, error} = useHomefetch();
    console.log(state);

    return <div>Home Page</div>
};

export default Home;