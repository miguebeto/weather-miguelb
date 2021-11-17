import React  from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <h4>Developed by: Miguel Blanco</h4>
      <span>Weather App</span>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
