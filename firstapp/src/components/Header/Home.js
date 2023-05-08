import React,{useState, useEffect} from "react";
//API
import API from "../../API";
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";
// Components
 
//Hook

//image

const Home =  () =>{
    const [state, setState] = useState();
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm ="") =>{
        try{
       setError(false);
       setLoading(true);

       const movies = await API.fetchMovies(searchTerm,page);
       console.log(movies);

        } catch(error){
            setError(true);
        }
    };

    //Initial render
    useEffect(() =>{
      fetchMovies(1)
    },[])

    return <div>Home Page</div>
};

export default Home;