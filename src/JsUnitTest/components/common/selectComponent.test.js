import { shallow } from "enzyme";
import SelectComponent from "../../../components/common/SelectComponent";
describe('passing props', () => {

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
    },
    handleOnChange: fn => fn,
    handleDropdownChange: fn => fn,
    dropdown: [{ id: "Region values" }]
  }
  it('should call handleOnChange method', () =>
{
    const wrapper = shallow(<SelectComponent {...props}/>);
    expect(wrapper.find(`select`).simulate('change', {
      preventDefault: fn => fn,
      target: {name: "Africa"}
    }));
   expect(wrapper.find('handleOnChange')).toEqual({});
});

  // it('renders inputfield for handleonchange', () => {

  //   const wrapper = shallow(<SelectComponent {...props} />);
  //   wrapper.find(`select`).simulate('change', {
  //     preventDefault: fn => fn,
  //     target: {
  //       region: "Africa"
  //     }
  //   });

  // });

});