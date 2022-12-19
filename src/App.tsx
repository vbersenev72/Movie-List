import React, { useState, useEffect } from 'react';
import Header from './components/header';
import { MoviesList } from './pages/MoviesList';
import { About } from './pages/About';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import axios from 'axios';



function App() {

  const [movies, setMovies] = useState([])


    async function DataFetch() {
      const responseServer = await axios.get("http://localhost:8000/movies") // сервер находится на порту 8000
      setMovies(responseServer.data)
      console.log(responseServer.data)
    }

    useEffect(() => {
      DataFetch()
    }, [])






  return (
    <div className="App">
     <Header/>

     <Routes>
      <Route path='/Home' element={<HomePage/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Movies' element={<MoviesList movies = {movies} />}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;