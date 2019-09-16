import React, { Component } from 'react';

import './App.css';
import MovieName from './MovieName';
import Logo1  from './AQuitPlace.png';

import Logo from './BridBox.png';
import MovieList from './MovieList';

import Logo3 from './GameOfThrone.png';
import Logo4 from './EscapeRom.jpg';
import logo5 from './ToyStory.jpg';
import StarRatingComponent from 'react-star-rating-component';
const tablist = [{ id: 'inception', rating: '5', image: Logo , title: 'Brid Box - 2018 ' }, { id: 'inception', rating: '1', image: Logo1, title: ' A Quit Place' },
{ id: 'inception', rating: '4', image: Logo3 , title: ' Game Of Throne - 2017 ' },
 { id: 'inception', rating: '4', image: Logo4 , title: ' Escape Rom - 2019 ' },
  { id: 'inception', rating: '3', image: logo5 , title: ' Toy Story - 2019 ' }]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: tablist,
      titleFilter: '',
      minRating: 2

    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ minRating: nextValue });
  }
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className='row name-rating'>
            <MovieName
              onChange={(newtitleFilter) => this.setState({ titleFilter: newtitleFilter })}
              value={this.state.titleFilter} />
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.minRating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>

          <MovieList movies={
            this.state.movies.filter(
              el => el.rating >= this.state.minRating && el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim()
              )
            )}
            onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />




        </div>


      </div>)
  }
}


export default App;