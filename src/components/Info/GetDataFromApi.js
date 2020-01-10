import React from "react";
const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

class GetDataFromApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  render() {
    const { hits } = this.state;

    return (
        <ul>
          {hits.map(hit => (
            <li key={hit.objectID}>
              href={hit.url},{hit.title}
            </li>
          ))}
        </ul>
    );
  }
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
}

export default GetDataFromApi;
