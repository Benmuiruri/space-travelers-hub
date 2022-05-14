import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Pages/Missions';

// @ts-ignore
global.fetch = () => Promise.resolve({
  json: () => Promise.resolve([{
    id: 1,
    name: 'Apollo Mission',
    description: 'The famous Apolo mission',
    joined: false,
  }]),
});
const TestMissions = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Testing Mission Component', () => {
  it('gets header in rendered Test Missions Component', () => {
    render(<TestMissions />);
    const element = screen.getByRole('heading', { name: 'Missions Page' });
    expect(element).toBeVisible();
  });
});

describe('Test presence of Missions component', () => {
  test('renders the Missions component correctly', () => {
    const missionComponent = renderer.create(<TestMissions />).toJSON();
    expect(missionComponent).toMatchSnapshot();
  });
});

describe('Test Join mission Button', () => {
  test('Join Button changes after it is clicked', () => {
    render(<TestMissions />);
    fireEvent.click(screen.getByRole('button', { name: 'Join Mission' }));
    const spanElement = screen.getByRole('cell', { name: /Active member/i });
    expect(spanElement).toBeVisible();
  });
});

describe('Test Leave mission Button', () => {
  test('Leave Button changes after it is clicked', () => {
    render(<TestMissions />);
    fireEvent.click(screen.getByRole('button', { name: 'Leave Mission' }));
    const spanElement = screen.getByRole('cell', { name: /Not a member/i });
    expect(spanElement).toBeVisible();
  });
});
