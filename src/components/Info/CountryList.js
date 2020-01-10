import React from "react";
import CountryDetail from "./CountryDetail";
import { Link, Redirect } from "react-router-dom";
import AppContainer from "../system/AppContainer";

const API = "https://restcountries.eu/rest/v2/region/";
const DEFAULT_QUERY = "europe";

class CountryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countryDataList: []
    };
  }

  render() {
    const { countryDataList } = this.state;

    return (
      <AppContainer>
        <div>
          <div class="alert alert-warning" role="alert">
            https://restcountries.eu/rest/v2/region/europe linkinden ülkeler
            datasını çekiyoruz. Api üzerinden çekilen datanın işlenmesi
            uygulaması.
          </div>

          <table class="table">
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
              {/* <tr>
                    <th scope="row"> </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> <CountryDetail cName="dsadsa" /> </td>
                </tr> */}
              {countryDataList.map(countryData => (
                <tr>
                  <th scope="row"> {countryData.numericCode}</th>
                  <td>{countryData.name}</td>
                  <td>{countryData.capital}</td>
                  <td>{countryData.population}</td>
                  <td>
                    <img src={countryData.flag} style={{ maxWidth: 20 }} />
                  </td>
                  <td>
                    {/* <CountryDetail key={countryData.numericCode} cName={countryData.name} /> */}
                    <button
                      onClick={this.onDetail.bind(
                        this,
                        countryData.numericCode
                      )}
                      className="btn btn-primary btn-sm"
                    >
                      Detay
                    </button>
                    <Link
                      to={{
                        pathname: "/country-detail",
                        state: {
                          id: countryData.numericCode,
                          capital: countryData.capital,
                          population: countryData.population,
                          flag: countryData.flag
                        }
                      }}
                    >
                      Detay sayfası
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppContainer>
    );
  }

  onDetail(id, e) {
    alert(id);
    this.props.history.push("/country-detail", { id: "1", capital: "capital" });
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ countryDataList: data }));
  }
}

export default CountryList;
