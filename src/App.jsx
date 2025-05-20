import React from "react";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import heroImg from "./assets/hero-img.png";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx"


const App = (props) => {
  // globally used the state
  const [searchTerm, setSearchTerm] = useState("");


  const [errorMessage, setErrorMessage] = useState('');
  const [movieList , setMovieList] = useState([]);
  const [loading , setLoading] = useState(false);
  

const API_BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
console.log(API_BASE_URL)

const API_OPTIONS = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTZlZWNjZGU1MDQ2YWQwODE2M2NlN2EzYzcxZmVlMyIsIm5iZiI6MTc0NzY1NjQ0MC40ODk5OTk4LCJzdWIiOiI2ODJiMWVmODAzZGM3ZjRlZjJkYjJjMmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iLNfY_03M9pnLjd5CoXJOGhHKGOzD0kJguMtTKgM630',
    accept: 'application/json',
  }
};



const fetchMovies = async () => {

setLoading(true);
setErrorMessage("")


  try {
    const endpoint = `${API_BASE_URL}?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API error response: ${errorText}`);
      throw new Error("Failed to fetch Movies");
    }

    const data = await response.json();
    if(data.response === 'false'){
      setErrorMessage(data.error || 'failed to each movies');
    setMovieList([]);
    return;
    }
    setMovieList(data.results || [])
  } catch (error) {
    console.error(`error fetching movies: ${error}`);
    setErrorMessage("Error Fetching Movies. Please try again later.");
  }
  finally{
    setLoading(false);
  }
};





  


  useEffect(()=>{
fetchMovies();
  },[])

  return (
    <>
      {/* All the contents wrapped in the main container */}
      <main>
        <div className="main-parent">
          <div className="wrapper">
            <header>
              {/* hero image */}
              <div
                className="hero-image"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={heroImg} alt="image not found" className="animated-hero" />
              </div>

              <h1 style={{ marginBottom: "30px" }}>
                Find{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Movie's
                </span>{" "}
                with Enjoy without the Hassle
              </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </header>
            {/* search components */}
            <h1 className="">{searchTerm}</h1>


            <section className="all-movies">
              <h2 className="mt-80">All Movies</h2>
              {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}

     {loading ? (
  <p className="text-blue-800">
    {/* <p>Loading...</p> */}
    <Spinner />

   
  </p>
) : errorMessage ? (
  <p className="text-red-500">{errorMessage}</p>
) : (
  <ul>
    {movieList.map((movie) => (
      console.log("Movie List:", movieList),

      <p key={movie.id} className="text-black">
        {movie.title}
      </p>
    ))}
  </ul>
)}


            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
