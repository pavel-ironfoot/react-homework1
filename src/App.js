import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import Numbers from './components/Numbers/Numbers';
import Strings from './components/Strings/Strings';
import Flats from './components/Flats/Flats';
import Git from './components/Git/Git';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <Routes>
          <Route path='/' element = {<Main />} />
          <Route path='/numbers' element = {<Numbers />} />
          <Route path='/strings' element = {<Strings />} />
          <Route path='/flats' element = {<Flats/>} />
          <Route path='/git' element = {<Git/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );


}

export default App;
