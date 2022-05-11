import { NavLink } from 'react-router-dom';
import Header from './Header';
import styles from './Navigation.module.css';

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
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <Header />
        <ul className={styles.navigation}>
          {mainLinks.map((link) => (
            <li key={link.id} className={styles.navLink}>
              <NavLink
                data-testid={link.id}
                to={link.path}
                className={styles.link}
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
