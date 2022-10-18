import './Aside.css';
import { NavLink } from 'react-router-dom';

const Aside = () => {
  return (
    <aside className="aside">
      <h3>Список Завдань:</h3>
      <ul>
        <li><NavLink className='asideNav' to='/'>Main</NavLink></li>
        <li><NavLink className='asideNav'  to='/git'>1.Git</NavLink></li>
        <li><NavLink className='asideNav' to='/numbers'>2.Numbers</NavLink></li>
        <li><NavLink className='asideNav' to='/strings'>3.Strings</NavLink></li>
        <li><NavLink className='asideNav' to='/flats'>4.Flats</NavLink></li>
      </ul>
    </aside>
  );
}

export default Aside;