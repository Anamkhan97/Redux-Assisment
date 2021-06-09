import React from 'react';
import Dropdown from './countrySelector';
import content from '../mock/mockContent';
import '../styles/App.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Dropdown  Content = {this.props.Content}/>
      </div>
    )
  }
}
App.defaultProps ={
  Content: content
}
export default App;
