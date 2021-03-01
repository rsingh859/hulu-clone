import React, { useState, useEffect } from 'react';
import Videocard from '../Videocard/Videocard.component';
import './Results.styles.css';
import axios from '../../axios';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
        }

        fetchData();
    }, [selectedOption]);

    return (
        <div className='results'>
        <FlipMove>
            { movies.map((movie) => (
                <Videocard key={movie.id} movie={movie} />
            ))}    
        </FlipMove>        
        </div>
    )
}

export default Results
