import React, { useState } from 'react'
import axios from 'axios';


const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: [],

}

const MovieForm = props => {
    const [movie, setMovie] = useState(initialMovie)

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        setMovie({
            ...movie,
            [ev.target.name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='id'
                    name='id'
                    onChange={changeHandler}
                    value={movie.id}
                
                />

                <input
                    type='text'
                    placeholder='title'
                    name='title'
                    onChange={changeHandler}
                    value={movie.title}

                />

                <input
                    type='text'
                    placeholder='director'
                    name='id'
                    onChange={changeHandler}
                    value={movie.director}

                />

                <input
                    type='text'
                    placeholder='metascore'
                    name='id'
                    onChange={changeHandler}
                    value={movie.metascore}

                />

                <input
                    type='text'
                    placeholder='stars'
                    name='id'
                    onChange={changeHandler}
                    value={movie.stars}

                />


                <button>Add Movie</button>

            </form>




        </div>


    )
}


export default MovieForm;




