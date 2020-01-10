import React from "react";
import { Link } from "react-router-dom";
import DataService from "../../services/DataService";
import { postData } from "../../services/postData";
import AppContainer from "../system/AppContainer";

// const API = 'https://localhost:44375/api/';
// const DEFAULT_QUERY = 'Category/Get';

class CategoryList extends React.Component {
  dataService = new DataService();
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loaading: false
    };
  }

  render() {
    const { categories } = this.state;
    return (
      <AppContainer>
        <div className="card">
          <div class="alert alert-warning" role="alert">
            api üzerinden Kategori listesinin çekilmesi. Buradaki ekleme
            güncelle ve sil methodları eklenmiştir.
          </div>

          <div class="card-header">
            Kategoriler
            <Link className="nav-link active" to="/add-category/">
              Yeni kategori ekle
            </Link>
          </div>

          <div class="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Kategori</th>
                  <th scope="col"> </th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                {categories.map(category => (
                  <tr key={category.id}>
                    <th scope="row">{category.id}</th>
                    <td>{category.name}</td>
                    <td>
                      {/* <Link className="nav-link active" to="/edit-category/">Güncelle</Link>  */}
                      <Link
                        to={{
                          pathname: "/edit-category",
                          state: {
                            category: category
                          }
                        }}
                      >
                        Detay sayfası
                      </Link>
                    </td>
                    <td>
                      <input
                        type="button"
                        value="x"
                        onClick={() => this.deleteClicked(category.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {this.state.loaading ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
              width="100"
            />
          ) : null}
        </div>
      </AppContainer>
    );
  }

  deleteClicked(id) {
    alert(id);

    let req = {
      ID: id
    };

    this.dataService
      .postData("Category/Delete", req)
      .then(result => {
        alert("kayıt başarıyla silinmiştir.");
      })
      .catch(function(hata) {
        console.log(hata);
      });
  }

  componentDidMount() {
    // postData().then (
    //   result => {
    //     this.setState({ categories: result })
    //   }
    // ).catch(function(hata){
    //   console.log(hata)
    //   });
    let req = {
      ID: 0
    };

    req.ID = 1;
    this.setState({ loaading: true });

    this.dataService
      .postData("Category/Get", req)
      .then(result => {
        this.setState({ categories: result, loaading: false });
        console.log("kategoriler>>>", result);
      })
      .catch(function(hata) {
        console.log(hata);
        this.setState({ loaading: false });
      });

    // fetch(API + DEFAULT_QUERY,{
    //   method: "POST" ,
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => this.setState({ categories: data }));
  }
}

export default CategoryList;
