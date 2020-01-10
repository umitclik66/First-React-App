import React from "react";

import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LoginAction } from "../../actions/LoginAction";

class Top extends React.Component {
  render() {
    const logined = true;

    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/local-storage-test/">
            Local Storage İşlemleri
          </Link>
          <Link className="p-2 text-dark" to="/todo/">
            Todo Uyg.
          </Link>
          <Link className="p-2 text-dark" to="/get-data-from-api/">
            Data from api
          </Link>
          <Link className="p-2 text-dark" to="/country-list/">
            Ulkeler
          </Link>
          <Link className="p-2 text-dark" to="/contact/">
            İletisim
          </Link>
          <Link className="p-2 text-dark" to="/NewsList/">
            Haberler
          </Link>
          <Link className="p-2 text-dark" to="/categories/">
            Kategoriler
          </Link>
          <Link className="p-2 text-dark" to="/hook-page/">
            Hook Counter
          </Link>
          <Link className="p-2 text-dark" to="/user-detail/">
            Üye detay
          </Link>
        </nav>
        {/* {this.props.loginState.loginUser==null || this.props.loginState.loginUser==''
                 ?<p><Link className="btn btn-outline-primary" to="/login/">Login</Link> </p>
                 :<p>Welcome {this.props.loginState.loginUser} 

                 
                 
                 <button onClick={(e)=>{
                            this.props.loginAction('Logout','item')
                        }} className="btn btn-danger btn-xs" style={{marginTop:"10px"}} >x</button>
                 </p> 
                }  */}
                
        { localStorage.getItem("loginUser") == null ||
        localStorage.getItem("loginUser") == "" ? (
          <p>
            <Link className="btn btn-outline-primary" to="/login/">
              Login
            </Link>{" "}
          </p>
        ) : (
          <p>
            Welcome {localStorage.getItem("loginUser")}
            <button
              onClick={e => {
                this.props.loginAction("Logout", "item");
                localStorage.removeItem("loginUser" );
                window.location.pathname = "/login/";
              }}
              className="btn btn-danger btn-xs"
              style={{ marginTop: "10px" }}
            >
              x
            </button>
          </p>
        )}
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Top);
