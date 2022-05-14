import { NavLink } from 'react-router-dom';
import Header from './Header';
import classes from './Navigation.module.css';

function Navigation() {
  const mainLinks = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  return (
    <header className={classes.header}>
      <Header />
      <nav className={classes.headerNav}>
        <ul className={classes.navigation}>
          {mainLinks.map((link) => (
            <li key={link.id} className={classes.navLink}>
              <NavLink
                // @ts-ignore
                activeClassName={classes.underline}
                data-testid={link.id}
                to={link.path}
                className={({ isActive }) => (isActive ? `${classes.link} ${classes['active-link']}` : classes.link)}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
