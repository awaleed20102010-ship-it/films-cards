import React, { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
    const param = useParams();
    const [movie, setMovie] = useState([]);
    const getproduct = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=a29935a3c8d44653990e511c03ef1fda&language=ar`);
      setMovie(res.data);
    };
    
    useEffect(()=>{
      getproduct();
    
        },[]);
  
  return (
    <section className="movie py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6  text-center">
            <h3 className="fw-bold">{movie.title}</h3>
            <h3>{movie.overview}</h3>
            <h3>{movie.release_date}</h3>
            <h3>{movie.vote_average}</h3>
          </div>
          {/* 1 */}
          <div className="col-md-6 text-center">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-50" alt=""/>
          </div>
          {/* 2 */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
}

export default Details;
