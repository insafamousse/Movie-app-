import React from 'react';
import MovieCard from './MovieCard';
import Plus from './Plus.png';





const MovieList = ({movies=[],onAddMovie=()=>{}})=>{
    return(
    
        <div className='card-list'>
            <div className="row">
        
        {movies.map(el=><MovieCard key={el.id} Y={el}/>)}
        </div>
        
        

        <div >
        
        <img src={Plus} className='prompt-button' onClick={() => {
                onAddMovie({
                    id:Math.random,
                    title: prompt('movie title: '),
                    rating: Number(prompt('movie rating: '))
                   
                    
                })
            }} type="button" alt="image-prompt"/>
      </div>
      </div>)
        
    
}

export default MovieList;