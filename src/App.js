import Navbar from './components/Navbar';
import StarWarsPeoplePage from './views/StarWarsPeoplePage';
import StarWarsPlanetsPage from './views/StarWarsPlanetsPage';
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Main path="/" />
        <StarWarsPeoplePage path="/people/:obj" />
        <StarWarsPlanetsPage path="/planets/:obj" />
      </Router>
      <p>This is the Star Wars API.</p>

    </div>
  );
}

export default App;
