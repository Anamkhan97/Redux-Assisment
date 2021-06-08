import React from 'react';
import Data from '../mock/mockContent.js';
import { connect } from 'react-redux';
import { loadData } from '../actions/action.js';

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
       
        this.setCountries(this.props.Data.apiRegions[0]);

        this.setState({
            regions: this.props.Data.apiRegions,
            country: this.props.apiValues
        });
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if (prevProps.apiValues !== nextProps.apiValues) {
            return {
                country: nextProps.apiValues,
                selected: nextProps.name,
            };
        }
        return null;
    }

    changeCountry(event) {
        this.setState({ selectedRegion: event.target.value });
        this.props.loadData(event.target.value);
    }

    setCountries(region) {
        this.props.loadData(region);
        if (this.props.apiValues) {
            this.setState({
                country: this.props.apiValues
            })
        }

    }
    render() {
        return (
            <div className="component">
                <h1>{this.props.Data.heading}</h1>
                <div className="dropdown">
                <label>Select Region </label>
                <select value={this.state.selectedRegion} onChange={this.changeCountry}>
                    {this.state.regions.map((region, i) => {
                        return <option key={i}>{region}</option>
                    })}
                </select>               
                <br />              
                <label>Select Country </label>
                <select >
                    {this.state.country.map(
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
    Data: Data
}
const mapStateToProps = (state) => {
    return {
        apiValues: state.event.apiValues
    };
};
const mapDispatchProps = (dispatch) => ({
    loadData: (region) => dispatch(loadData(region))
});

export default connect(mapStateToProps, mapDispatchProps)(Dropdown);