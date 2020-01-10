import React from "react";
import AppContainer from "../system/AppContainer";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pEmail: "",
      pPassword: ""
    };

    this.onSubmitButtonClicked = this.onSubmitButtonClicked.bind(this);
  }

  render() {
    return (
      <AppContainer>
        <div class="container">
          <div class="alert alert-warning" role="alert">
            Json post test işlemi. İletişim formunu
            https://jsonplaceholder.typicode.com/posts linkine post methodu ile
            gönderip sonuç alma işlemi testi.
          </div>

          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="pEmail"
                placeholder="Enter email"
                value={this.state.pEmail}
                onChange={evt => this.onChange(evt)}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="pPassword"
                value={this.state.pPassword}
                onChange={evt => this.onChange(evt)}
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>

            <input
              type="button"
              value="Ekle"
              onClick={() => this.onSubmitButtonClicked()}
            />
          </form>
        </div>
      </AppContainer>
    );
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // onEmailChange(event){
  //     this.setState({pEmail:event.target.value});
  // }
  // onPasswordChange(event){
  //     this.setState({pPassword:event.target.value});
  // }

  onSubmitButtonClicked() {
    const data = JSON.stringify({
      firstParam: "yourValue",
      secondParam: "yourOtherValue"
    });
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => {
        alert(res.status);
        console.log(res);
        return res;
      })
      .catch(err => err);
  }
}

export default Contact;
