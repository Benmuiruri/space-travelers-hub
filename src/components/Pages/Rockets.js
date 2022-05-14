import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import styles from '../rockets/Rockets.module.css';
import RocketItem from '../rockets/elementRockets';

function Rockets() {
  const rocketList = useSelector((state) => state.rockets);
  return (
    // <h1>Rocket</h1>
    <Container>
      <ul className={styles.flex1}>
        {rocketList.map((item) => (
          <RocketItem
            desc={item.desc}
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.flickr_images}
            reserved={item.reservation}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Rockets;
