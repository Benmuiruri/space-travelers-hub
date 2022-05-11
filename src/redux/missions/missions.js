const URL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'spaceTraveler/missions/GET_MISSIONS';
const JOIN_MISSION = 'spaceTraveler/missions/JOIN_MISSIONS';

const initialState = [];
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MISSIONS:
      return payload.missions;
    case JOIN_MISSION:
      return payload.missions;
    default:
      return state;
  }
}

export const getMissions = (missions) => ({
  type: GET_MISSIONS,
  payload: {
    missions,
  },
});

export const getAllMissions = () => (dispatch) => {
  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      const missionsList = res.map((data) => ({
        id: data.mission_id,
        name: data.mission_name,
        description: data.description,
        joined: false,
      }));
      dispatch(getMissions(missionsList));
    });
};

export const joinMission = (id) => ({
  type: GET_MISSIONS,
  payload: {
    id,
  },
});
