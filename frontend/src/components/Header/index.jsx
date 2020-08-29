import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/employees/new">Adicionar funcionário</Link>
  </header>
)

export default Header;