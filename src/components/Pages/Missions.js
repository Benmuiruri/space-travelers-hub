/* eslint-disable consistent-return */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getAllMissions } from '../../redux/missions/missions';
import classes from './Missions.module.css';

const Missions = () => {
  // @ts-ignore
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    if (missions.length) dispatch(getAllMissions());
  }, []);

  if (missions.length) {
    return (
      <section className={classes.missionsContainer}>
        <h2>Missions Page</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mission Name</th>
              <th>Mission Description</th>
              <th>Mission Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
                <td>{mission.description}</td>
                <td>
                  <span> Not a member </span>
                </td>
                <td>
                  <button type="button" className={classes['action-button']}>
                    Join Mission
                  </button>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </Table>
      </section>
    );
  }
  return (
    <>
      <p>There are no missions </p>
    </>
  );
};
export default Missions;
