import React from 'react';
class SelectComponent extends React.Component{
    render(){
        const dropdown = this.props.dropdown
        return (
            <div>
                <select
                    value={this.props.value}
                    onChange={this.props.onChange}>
                        {
                            dropdown.map(x => {
                                return <option>{x.name}</option>
                            })
                        }
                </select>
            </div>
        )
    }
}
export default SelectComponent;
