import React, { forwardRef } from 'react';
import './Videocard.styles.css';

import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const Videocard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className='videocard'>
            <img src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`} alt="movie_poster"/>
            <TextTruncate
                line={1}
                element="p"
                truncateText='...'
                text={movie.overview}
             />
            <h2>{movie.title || movie.original_name}</h2>
            <p className='videocard__stats'>
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.air_date} •
                <ThumbUpSharp />{" "}
                {movie.vote_count}
            </p>
        </div>
    )
});

export default Videocard
