import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
// importing all necessary tools for the app

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      {/* creating a route for the home page of the app */}
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* creating a route that will show the details of a movie when it is clicked on */}
        <Route path="/details" exact>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
