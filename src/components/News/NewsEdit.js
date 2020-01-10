import React from "react";
import DataService from "../../services/DataService";
import AppContainer from "../system/AppContainer";

class NewsEdit extends React.Component {
  dataService = new DataService();
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.location.state.news.id,
      name: this.props.location.state.news.title,
      desc: this.props.location.state.news.description,
      news: this.props.location.state.news
    };
    console.log("gelen veri>>", this.props.location.state.news);
  }

  render() {
    return (
      <AppContainer>
        <div>
          <div className="alert alert-warning" role="alert">
            Haber güncelleme ekranı. Api üzerinden veri gönderilip
            güncellenecek.
          </div>
          {this.props.location.state.news.id} -
          {this.props.location.state.news.title}
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                Haber güncelleme ekranı
              </label>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                placeholder="id"
                value={this.state.id}
                onChange={evt => this.onChange(evt)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Haber başlığı</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={evt => this.onChange(evt)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Haber içeriği</label>
              <input
                type="text"
                className="form-control"
                id="desc"
                name="desc"
                placeholder="description"
                value={this.state.desc}
                onChange={evt => this.onChange(evt)}
              />
            </div>
            <input
              type="button"
              value="kaydet"
              onClick={() => this.updateNews()}
              className="btn btn-primary"
            />
          </form>
        </div>
      </AppContainer>
    );
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateNews = () => {
    let updatedNews = this.state.news;

    updatedNews.title = this.state.name;
    updatedNews.description = this.state.desc;

    this.setState({
      news: updatedNews
    });

    alert(updatedNews.name);
    this.dataService
      .postData("News/Update", this.state.news)
      .then(result => {
        alert("kayıt başarıyla güncellenmiştir.");
      })
      .catch(function(hata) {
        alert("Kayıt güncellenememiştir. Hata:" + hata);
        console.log(hata);
      });
  };
}

export default NewsEdit;
