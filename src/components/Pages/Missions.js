/* eslint-disable consistent-return */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getAllMissions, joinMission } from '../../redux/missions/missions';
import classes from './Missions.module.css';

const Missions = () => {
  // @ts-ignore
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getAllMissions());
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
                  {!mission.joined && (
                    <button
                      type="button"
                      className={classes['action-button']}
                      onClick={() => {
                        dispatch(joinMission(mission.id));
                      }}
                    >
                      Join Mission
                    </button>
                  )}
                  {mission.joined && (
                    <button
                      type="button"
                      className={classes['action-button']}
                      onClick={() => {
                        dispatch(joinMission(mission.id));
                      }}
                    >
                      Leave Mission
                    </button>
                  )}
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
