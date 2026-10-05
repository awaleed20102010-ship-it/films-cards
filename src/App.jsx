import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import Movie from "./Components/Movie";

function App() {
   const [movies, setMovies] = useState([]);
   const getproduct = async () => {
     const res = await axios.get(
       `https://api.themoviedb.org/3/movie/popular?api_key=a29935a3c8d44653990e511c03ef1fda&language=ar`,
     );
     setMovies(res.data.results);
   };
   const search = async (word) => {
     const res = await axios.get(
       `https://api.themoviedb.org/3/search/movie?api_key=a29935a3c8d44653990e511c03ef1fda&query=${word}&language=ar`,
     );
     setMovies(res.data.results);
   };

   useEffect(() => {
     getproduct();
   }, []);

   return (
     <>
          
       <Header search={search} />
       <Routes>
         <Route path="/" element={<Movie movies={movies} />} />
         <Route path="/details/:id" element={<Details />} />
       </Routes>
       <Footer />
     </>
   );
};

export default App;

      
            