import React from 'react';
import content from '../mock/mockContent.js';
import { connect } from 'react-redux';
import { getCountries } from '../actions/action.js';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regions: [],
            country: [],
            selectedRegion: ''
        };
       
        this.changeCountry = this.changeCountry.bind(this);
    }
    componentDidMount() {
       
        this.setCountries(this.props.Content.regions[0]);
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if (prevProps.countries !== nextProps.countries) {
            return {
                country: nextProps.countries,
                selected: nextProps.name,
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
                <select value={this.state.selectedRegion} onChange={this.changeCountry}>
                    {this.props.Content.regions.map((region, i) => {
                        return <option key={i}>{region}</option>
                    })}
                </select>               
                <br />              
                <label>Select Country </label>
                <select >
                    {this.props.countrries.map(
                        (element, i) => {
                            return <option key={i}>{element.name}</option>;
                        }
                    )}
                </select>
                </div>
            </div>
        )
    }
}
Dropdown.defaultProps = {
    Content: content
}
const mapStateToProps = (state) => {
    return {
        countries: state.event.countries
    };
};
const mapDispatchProps = (dispatch) => ({
    getCountries: (region) => dispatch(getCountries(region))
});

export default connect(mapStateToProps, mapDispatchProps)(Dropdown);
