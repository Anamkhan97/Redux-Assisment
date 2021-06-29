import { CHANGE_REGION, REGION_FAIL } from '../../actions/actionType';
import countryReducer from '../../reducers/countryReducer';
const INITIAL_STATE = {
    countries: [],
    error: null
}
describe('testing reducer', () => {
    it('returns the initial state', () => {
        expect(countryReducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    it('handles success', () => {
        expect(countryReducer(INITIAL_STATE, {
            type: CHANGE_REGION,
            payload:[ 'India'],
        })).toEqual({
            ...INITIAL_STATE,
            countries: ['India']
        });
    });

    it('handles error', () => {
        expect(countryReducer(INITIAL_STATE, {
            type: REGION_FAIL,
            payload: "undefined"
        })).toEqual({
            ...INITIAL_STATE,
            error: "undefined"
        });
    });
});