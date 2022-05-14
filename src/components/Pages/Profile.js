import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMissions } from '../../redux/missions/missions';
import { fetchRocketsAPI } from '../../redux/rockets/rockets';

import classes from './Profile.module.css';

const Profile = () => {
  // @ts-ignore
  const missions = useSelector((state) => state.missions.filter((mission) => mission.joined));
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reservation));

  useEffect(() => {
    // @ts-ignore
    if (!missions.length && !rockets.length) {
      dispatch(getAllMissions());
      dispatch(fetchRocketsAPI());
    }
  }, []);
  return (
    <>
      <h2>My Profile</h2>
      <section className={classes.profileContainer}>
        <Table className={classes.table} striped bordered hover>
          <thead>
            <tr>
              <th>Joined Missions</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table className={classes.table} striped bordered hover>
          <thead>
            <tr>
              <th>Reserved Rockets</th>
            </tr>
          </thead>
          <tbody>
            {rockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};
export default Profile;
