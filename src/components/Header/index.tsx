import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { Container, NavLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();
  const [pathName, setPathName] = useState('');

  useEffect(() => {
    setPathName(`${location.pathname}`);
  }, [location]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink location={pathName} to="/">
            Listagem
          </NavLink>

          <NavLink location={pathName} to="/import">
            Importar
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
