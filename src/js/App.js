import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
