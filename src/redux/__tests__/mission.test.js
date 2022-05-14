import reducer, { getMissions, joinMission } from '../missions/missions';

describe('Testing Mission store state', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  test(' getMission should return updated state with missions', () => {
    const previousState = [];
    const missions = [
      {
        id: 1,
        name: 'Test mission',
        description: 'This is a test Mission',
        joined: false,
      },
    ];
    expect(reducer(previousState, getMissions(missions))).toEqual([
      {
        id: 1,
        name: 'Test mission',
        description: 'This is a test Mission',
        joined: false,
      },
    ]);
  });

  test('Join mission should update the joined status of a mission', () => {
    const previousState = [
      {
        id: 1,
        name: 'Test mission',
        description: 'This is a test Mission',
        joined: false,
      },
    ];
    expect(reducer(previousState, joinMission(1))).toEqual([
      {
        id: 1,
        name: 'Test mission',
        description: 'This is a test Mission',
        joined: true,
      },
    ]);
  });
});
