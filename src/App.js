import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { CoinPage } from './Pages/CoinPage';
import { Homepage } from './Pages/Homepage';
import { makeStyles} from '@material-ui/core';
function App() {
  const useStyle = makeStyles({
    App: {
      backgroundColor: 'rgb(6,17,33)',
      color: 'white',
      minHeight: '100vh',
    }});
  const classes =  useStyle();
  return (
    <BrowserRouter>
        <div className = {classes.App}>
          <Header/>
          <Route exact path = "/" component ={Homepage}/>
          <Route path = "/coins/:id" component={CoinPage}/>
        </div>
    </BrowserRouter>
  )
}

export default App;
