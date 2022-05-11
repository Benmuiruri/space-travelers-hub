// const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];
export default function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    // case GET_MISSIONS:
    //   return payload.missions;
    default:
      return state;
  }
}
