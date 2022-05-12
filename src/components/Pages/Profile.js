import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMissions } from '../../redux/missions/missions';
import classes from './Profile.module.css';

const Profile = () => {
  // @ts-ignore
  const missions = useSelector((state) => state.missions.filter((mission) => mission.joined));
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getAllMissions());
  }, []);

  if (missions.length) {
    return (
      <section className={classes.profileContainer}>
        <h2>My Profile</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Joined Missions</th>
              <th>Reserved Rockets</th>
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
      </section>
    );
  }
  return (
    <>
      <p>You have not joined any missions or reserved any rockets. </p>
    </>
  );
};
export default Profile;
