//-- Create data set of Monsters including image, name, and email --
//-- Create Monster Container --
//-- Create a Monster Card that takes props for image, name, and email --
//-- Map data over Monster Card data and display cards --
// Implement search functionality
// Style Container and Monster Card

import "./App.css";
import { Component } from "react";
import { SearchBox } from "./components/SearchBox/search-box";
import { CardList } from "./components/CardList/card-list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (event) => this.setState({ searchField: event.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className="Monster-header">Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder={"Search Monsters"}
        />
        <CardList monsterData={filteredMonsters} />
      </div>
    );
  }
}

export default App;
