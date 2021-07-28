import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import WordSearch from './components/WordSearch';
import SavedWords from './components/SavedWords';


function App() {
  
  return (
    <Router>

    <div className="App">
    < img src='https://dictionaryapi.com/images/MWLogo_120x120_2x.png' alt="logo" />
    

      <NavBar/>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/wordsearch' component={WordSearch} />
        </Switch>

        
      
    </div>

    </Router>
  );
}

export default App;
