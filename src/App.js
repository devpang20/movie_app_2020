import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App  extends React.Component {
  state = {
    isLoading : true,
    movies: []
  };
  getMovie = async () => {
    const { 
        data: {
          data: { movies }
        }
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false })
  };

  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading" 
        : movies.map(movie => {
            return (
              <Movie   
                id={movie.id}   
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                medium_cover_image={movie.medium_cover_image} 
              />
            )
          })}
      </div>
    )

  }
}

export default App;
