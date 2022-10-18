import './Header.css';
import { NavLink } from 'react-router-dom';
import logoPic from './image/Hogwarts.png';

const Header =()=>{
    return (
      <header className='header'>
        <NavLink className='headerNav' to='/'><h1>Main </h1>
        <img className='headerLogoPic' src={logoPic}  alt='hogwartz'/></NavLink>
        <h3>Сторінка розрахована на адекватного юзера, дякую</h3>
      </header>
    );
  }

  export default Header;