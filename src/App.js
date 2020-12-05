import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    console.log(movies);
  };

  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "Ready"}</div>;

  }
}

export default App;
