import React from 'react';

import { connect } from 'react-redux';
import { getCountries } from '../actions/action-get-countries.js';
import SelectComponent from './common/selectComponent';

class CountrySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regions: [],
            country: [],
            selectedRegion: '',
            selectedCountry:''
        };
       
        this.changeCountry = this.changeCountry.bind(this);
    }
    componentDidMount() {
        this.setCountries(this.props.Content.regions[0].name );
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if (prevProps.countries !== nextProps.countries) {
            return {
                country: nextProps.countries,
                selectedCountry: nextProps.name,
            };
        }
        return null;
    }

    changeCountry(event) {
        this.setState({ selectedRegion: event.target.value });
        this.props.getCountries(event.target.value);
    }

    setCountries(region) {
        this.props.getCountries(region);
        if (this.props.countries) {
            this.setState({
                country: this.props.countries
            })
        }

    }
    render() {
     
        return (
            <div className="component">
                <h1>{this.props.Content.heading}</h1>
                <div className="dropdown">
                <label>Select Region </label>
               {/*  <select value={this.state.selectedRegion} onChange={this.changeCountry}>
                    {this.props.Content.regions.map((region, i) => {
                        return <option key={i}>{region}</option>
                    })}
                </select>   */}        
                <SelectComponent value={this.state.selectedRegion} onChange={this.changeCountry} dropdown={this.props.Content.regions}/>     
                <br />              
                <label>Select Country </label>
               {/*  <select >
                    {this.props.countries.map(
                        (country) => {
                            return <option >{country.name}</option>;
                        }
                    )}
                </select> */}
                <SelectComponent dropdown={this.props.countries}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.event.countries,
        error:state.event.error
    };
};
const mapDispatchProps = (dispatch) => ({
    getCountries: (region) => dispatch(getCountries(region))
});

export default connect(mapStateToProps, mapDispatchProps)(CountrySelector);