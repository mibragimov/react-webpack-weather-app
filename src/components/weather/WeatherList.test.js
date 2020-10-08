import React from 'react';
import { shallow } from 'enzyme';
import WeatherList from './WeatherList';
import WeatherItem from './WeatherItem';

const DAYS_MOCK = [{ dt: 1 }, { dt: 2 }, { dt: 3 }, { dt: 4 }, { dt: 5 }];

describe('<WeatherList/>', () => {
  it('should render 5 <WeatherItem/> components.', () => {
    const wrapper = shallow(<WeatherList days={DAYS_MOCK} />);
    DAYS_MOCK.map((day) => {
      return (
        <div key={day.dt}>
          {expect(wrapper.find(WeatherItem)).toHaveLength(5)}
        </div>
      );
    });
  });
});
