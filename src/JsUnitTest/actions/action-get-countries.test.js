import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/action-get-countries';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();


describe('getCountries actions', () => {
    it('dispatches getCountries after a successfull API requets', () => {
        mock.onGet("https://restcountries.eu/rest/v2/region/Africa").reply(200, { data: [{name: "Algeria" },{name:"India"}]})
        store.dispatch(actions.getCountries("Africa")).then(() => {
            console.log(store.getCountries("Africa"));
            let expectedActions = [
               
                {
                    type: 'CHANGE_REGION',
                    payload:{ data: [{name: "Algeria" },{name:"India"}]}
                }
            ]
           
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('dispatches REGION_FAIL after a FAILED API requets', () => {
        mock.onGet("https://restcountries.eu/rest/v2/region/").reply(400, { error: { message: 'error message' } });
        store.dispatch(actions.getCountries()).then(() => {
            let expectedActions = [
               
                {
                    type: 'REGION_FAIL',
                    payload: { error: { message: 'error message' } }
                }
            ]
            expect(store.getCountries()).toEqual(expectedActions)
        });
    });
});
