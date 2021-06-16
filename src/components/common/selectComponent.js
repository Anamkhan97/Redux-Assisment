import React from 'react';
class SelectComponent extends React.Component{
    handleOnChange(e){
        e.preventDefault();
        this.props.handleDropdownChange(e.target.value)
    }
    render(){
        const dropdown = this.props.dropdown
        return (
            <div>
                <select
                    value={this.props.value}
                    onChange={(e)=> this.handleOnChange(e)}>
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
