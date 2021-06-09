import React from 'react';
import content from '../mock/mockContent';
import '../styles/App.css';
import CountrySelector from './countrySelector';
class App extends React.Component {
  render() {
    return (
      <div>
        <CountrySelector  Content = {this.props.Content}/>
      </div>
    )
  }
}
App.defaultProps ={
  Content: content
}
export default App;
