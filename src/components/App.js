import React from "react";
import Movies from "./Movies";
import axios from "axios";
require("dotenv").config();

// genres api get
const genres = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
let genresname;
genres.then(function (x) {
      genresname = x.data.genres.map((y) => y);
});

class App extends React.Component {
      state = {
            movies: [],
      };

      async componentDidMount() {
            const responsive = await axios.get(`https://api.themoviedb.org/3/list/7100438?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
            this.setState({ movies: responsive.data.items });
      }

      render() {
            return (
                  <div>
                        <Movies movieprop={this.state.movies} genresprop={genresname} />
                  </div>
            );
      }
}

export default App;
