import React from "react";
import AppContainer from "../system/AppContainer";

class LocalStorageTest extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.controllLocalStorage = this.controllLocalStorage.bind(this);
  }

  render() {
    return (
      <AppContainer>
        <div>
          <div class="alert alert-warning" role="alert">
            localStorage üzerinde şimdinin tarihini yazıp silme işlemi.
          </div>
          <input
            type="button"
            value="Local storage ekleme işlemi yap"
            onClick={() => this.handleFormSubmit()}
          />
          <input
            type="button"
            value="Local storage Kontrol"
            onClick={() => this.controllLocalStorage()}
          />
        </div>
      </AppContainer>
    );
  }

  handleFormSubmit(e) {
    localStorage.setItem("rememberMe", Date.now().toString());
  }

  controllLocalStorage(e) {
    const rememberMe = localStorage.getItem("rememberMe");
    alert(rememberMe);
  }
}

export default LocalStorageTest;
