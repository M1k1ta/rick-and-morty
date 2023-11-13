import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

export const Header = () => (
  <header className='header'>
    <section className='header__section-1'>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
    </section>

    <section className='header__section-2'>
      <h1 className='header__title'>The Rick and Morty API</h1>
    </section>
  </header>
);
