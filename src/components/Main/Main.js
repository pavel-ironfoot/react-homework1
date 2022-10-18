import './Main.css';
import { NavLink } from 'react-router-dom';

const Main = () =>{

    return (
      <main className='main'>
        <h1>Головна</h1>
        <h3>Домашні завдання:</h3>
        <ul>
        <li><NavLink className='asideNav' to='/git'>1.Git</NavLink></li>
        <li><NavLink className='asideNav' to='/numbers'>2.Numbers</NavLink></li>
        <li><NavLink className='asideNav' to='/strings'>3.Strings</NavLink></li>
        <li><NavLink className='asideNav' to='/flats'>4.Flats</NavLink></li>
      </ul>
      </main>
    );
  }

  export default Main;