import reducer from '../rockets/rockets';

describe('Testing Rocket store state', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});
