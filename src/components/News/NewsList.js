import React from "react";
import DataService from "../../services/DataService";
import { Link } from "react-router-dom";
import AppContainer from "../system/AppContainer";

class NewsList extends React.Component {
  dataService = new DataService();

  constructor(props) {
    super(props);

    this.state = {
      newsLists: [],
      loaading: false,
      error: ""
    };
  }

  render() {
    const { newsLists, error, loaading } = this.state;

    return (
      <AppContainer error={error} loading={loaading}>
        <div>
          <div class="alert alert-warning" role="alert">
            api üzerinden haber listesinin çekilmesi.
          </div>
          <h5>Haberler</h5>
          {this.state.loaading ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
              width="100"
            />
          ) : null}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Başlık</th>
                <th scope="col">Okunma sayısı</th>
                <th scope="col">Aktif</th>
                <th scope="col">Kategori</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {newsLists.map(news => (
                <tr key={news.id}>
                  <th scope="row">1</th>
                  <td>{news.title}</td>
                  <td>{news.readCount}</td>
                  <td>{news.isActive}</td>
                  <td>{news.category ? news.category.name : 0}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "/edit-news",
                        state: {
                          news: news
                        }
                      }}
                    >
                      Güncelle
                    </Link>
                  </td>
                  <td>Sil</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppContainer>
    );
  }

  componentDidMount() {
    let req = {
      ID: 0
    };

    req.ID = 1;
    this.setState({ loaading: true });
    console.log("1");

    this.dataService
      .postData("News/Get", req)
      .then(result => {
        this.setState({ newsLists: result, loaading: false, error: "deneme" });
        console.log("haberlerrr>>>", result);
      })
      .catch((hata)=> {
        console.log(hata);
        alert(hata);
        this.setState({ error: hata});
      })
      .finally(() => {
        this.setState({   loaading: false });
      });
  }
}

export default NewsList;
