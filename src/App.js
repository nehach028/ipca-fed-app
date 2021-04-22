import {BrowserRouter, Route,Switch } from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/Home'
import Video from './components/Video'
import Error404 from './components/Error404'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video" component={Video} />
          <Route component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
