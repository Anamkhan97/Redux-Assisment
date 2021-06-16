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
                  
                <SelectComponent value={this.state.selectedRegion} handleDropdownChange={(region) =>this.setCountries(region)} dropdown={this.props.Content.regions}/>     
                <br />              
                <label>Select Country </label>
              
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
