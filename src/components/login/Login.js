import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LoginAction } from "../../actions/LoginAction";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.loginIslemi = this.loginIslemi.bind(this);
  }

  render() {
    return (
      <div
        className="form-signin"
        style={{
          width: "100%",
          maxWidth: "330px",
          padding: "15px",
          margin: "0 auto"
        }}
      >
        {this.props.loginState.loginUser == null ? (
          <div>
            <div className="alert alert-warning" role="alert">
              Login datası redux üzerine eklenip farklı bir compoentte datası
              basılarak testi yapılmıştır.
              Kullanıc adı ve şifreyi 1 olarak geçebilirsiniz.
              Henüz bir kotnrol eklenmedi.
            </div>

            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autoFocus=""
              value="1"
            ></input> 
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Password"
              required=""
              autoFocus=""
              value="1"
            ></input>
            <button
              onClick={evt => this.loginIslemi(evt)} 
              className="btn btn-lg btn-primary btn-block"
              style={{ marginTop: "10px" }}
            >
              Giriş yap
            </button>
          </div>
        ) : (
          <button
            onClick={e => {
              this.props.loginAction("Logout", "item");
            }}
            className="btn btn-lg btn-primary btn-block"
            style={{ marginTop: "10px" }}
          >
            Çıkış yap
          </button>
        )}
      </div>
    );
  }

  loginIslemi = () => {
    this.props.loginAction('Login','item');
    localStorage.setItem('loginUser', 'item');
    window.location.pathname = "/todo/";
  };
}

function mapStateToProps(state) {
  return {
    loginState: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loginAction: LoginAction
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
