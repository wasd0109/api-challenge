import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peopleList: [],
      searchField: "",
    };

    this.handleSearchBar = this.handleSearchBar.bind(this);
  }

  handleSearchBar(event) {
    this.setState({ searchField: event.target.value });
  }

  componentDidMount() {
    async function getData() {
      const request = await fetch("https://swapi.dev/api/people/");
      const data = await request.json();
      const list = data.results;
      return list;
    }
    (async () => {
      const list = await getData();
      this.setState({ peopleList: list });
    })();
  }

  render() {
    const filteredRobots = this.state.peopleList.filter((people) =>
      people.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div className="">
        <h1 className="text-base md:text-3xl text-center m-2 " id="title">
          Star Wars Character Database
        </h1>
        <SearchBar onChange={this.handleSearchBar} />
        <CardList list={filteredRobots} />
      </div>
    );
  }
}

export default App;
