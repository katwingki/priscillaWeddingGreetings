import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './component/pages/Home';
import mainSection from './component/mainSection';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={mainSection}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
