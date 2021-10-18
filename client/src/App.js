import logo from './logo.svg';
import './App.css';
import {Home} from './components/home/Home'
import { Route} from "react-router-dom";
import {EventL} from './components/EventListing/EventListing';
import {Edit} from './components/edit/Edit';
import {Create} from './components/create/Create';

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={Home}/>
    <Route exact path='/EventListing' component={EventL}/>
    <Route exact path='/edit/:id' render={({match}) => <Edit id={match.params.id}/>}/>
    <Route exact path='/create' component={Create}/>

    </div>
  );
}

export default App;
