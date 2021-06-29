import { shallow } from 'enzyme';
import App from '../../components/App';

describe('rendering App component properly', () => {
  let props = {
    content: {
      heading: "Region-Country Selector",
      regions: [
        {
          id: 'Africa',
          name: 'Africa'
        },
        {
          id: 'Asia',
          name: 'Asia'
        },
        {
          id: 'Europe',
          name: 'Europe'
        },
        {
          id: 'Americas',
          name: 'Americas'
        },
        {
          id: 'Oceania',
          name: 'Oceania'
        }]
    }
  }
  it('renders there <App /> components', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('.main-component').exists()).toBe(false);
  });

});
