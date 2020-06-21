import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBar";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peopleList: [],
    };
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
    const { peopleList } = this.state;
    return (
      <div className="">
        <h1 className="text-center m-2 text-3xl" id="title">
          Star Wars Character Database
        </h1>
        <SearchBox />
        <CardList list={peopleList} />
      </div>
    );
  }
}

export default App;
