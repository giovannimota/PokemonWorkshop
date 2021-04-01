import './App.css';
//import Main from "./pages/Main";
import PokeMain from "./pages/PokeMain";
import { BrowserRouter as Router, Link, Route, Switch } from "react-browser-router";
import PokeConsultas from './pages/PokeConsultas';

function App() {
  return (
    <Router>
      <Link to="/"><button type="button" class="btn btn-outline-dark">Busca</button></Link>
      <Link to="/get"><button type="button" class="btn btn-outline-dark">Consulta</button></Link>
      
      <Switch>
        <Route exact path="/" component={PokeMain} />
        <Route exact path="/get" component={PokeConsultas} />
      </Switch>

    </Router>
  );
}

export default App;