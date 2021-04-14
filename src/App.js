import React from 'react';
import './App.css';
import axios from "axios";
import Navbar from './components/Navbar';
import ListHeader from './components/ListHeader';

class App extends React.Component {

  state = {
    employees: [],
  };

  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
        .then(res => {
          this.setState({ employees: res.data.results });
        });
  }


  render() {
    return (
      <div className="App">
        <ListHeader/>
        {this.state.employees.length > 0 &&
        <Navbar employees={this.state.employees}/>
  }
      </div>
    );
  }
}

export default App;