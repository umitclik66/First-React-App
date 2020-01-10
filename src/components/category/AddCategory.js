import React from "react";
import DataService from "../../services/DataService";
import AppContainer from "../system/AppContainer";
const API = "https://localhost:44375/api/";
const DEFAULT_QUERY = "Category/Add";

class AddCategory extends React.Component {
  dataService = new DataService();
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      valueParentCategory: "0",
      categories: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <AppContainer>
        <div className="container">
          <h5 className="card-title"> kategori ekleme ekranı</h5>
          <div className="form-group">
            Kategori adı
            <input
              type="text"
              name="categoryName"
              id="categoryName"
              value={this.state.categoryName}
              onChange={evt => this.onChange(evt)}
              placeholder="Kategori adını giriniz."
              className="form-control"
            />
          </div>

          <div className="form-group">
            Bağlı olduğu kategori
            <select
              className="form-control"
              value={this.state.valueParentCategory}
              onChange={this.handleChange}
            >
              <option value="0">Yok</option>
              {this.state.categories.map(obj => (
                <option value={obj.id}>{obj.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="button"
              value="kaydet"
              onClick={() => this.addTestCategory()}
              className="btn btn-primary"
            />
          </div>
        </div>
      </AppContainer>
    );
  }

  handleChange(event) {
    this.setState({ valueParentCategory: event.target.value });
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTestCategory() {
    let postData = {
      Name: this.state.categoryName,
      IsActive: true
    };

    if (this.state.valueParentCategory != "0") {
      postData = {
        Name: this.state.categoryName,
        IsActive: true,
        ParentCategoryId: this.state.valueParentCategory
      };
    }
    //ParentCategoryId

    this.dataService
      .postData("Category/Add", postData)
      .then(result => {
        alert("kayıt başarıyla eklenmiştir.");
        //this.setState({ categories: result })
      })
      .catch(function(hata) {
        console.log(hata);
      });

    // fetch(API + DEFAULT_QUERY,{
    //   method: "POST" ,
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(postData)
    // })
    //   .then(response => response.json())
    //   .then(data => this.setState({ categories: data }));
  }

  getCategoryList() {
    let req = {
      ID: 0
    };

    this.dataService
      .postData("Category/Get", req)
      .then(result => {
        this.setState({ categories: result });
      })
      .catch(function(hata) {
        console.log(hata);
      });
  }

  componentDidMount() {
    this.getCategoryList();
  }
}

export default AddCategory;
