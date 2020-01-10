import React from "react";
import AppContainer from '../system/AppContainer';

const API =
  "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-21&sortBy=publishedAt&apiKey=e991e773779246d59488de8505fc64fd";
const DEFAULT_QUERY = "";

class NewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsDataList: []
    };
  }

  render() {
    const { newsDataList } = this.state;
    return (
      <AppContainer>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">capital</th>
              <th scope="col">Population</th>
              <th scope="col">Flag</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            {newsDataList.map(newsData => (
              <tr>
                <th scope="row"> {newsData.source.id}</th>
                <td>{newsData.title}</td>
                <td>{newsData.description}</td>
                <td>{newsData.population}</td>
                <td>
                  <img src={newsData.urlToImage} style={{ maxWidth: 20 }} />
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </AppContainer>
    );
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ newsDataList: data.articles }));
  }
}

export default NewsList;
