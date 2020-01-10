import React from "react";
import { Route, Redirect } from "react-router-dom";

// export default PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         localStorage.getItem('user')
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//     )} />
// );

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      activeRoot: window.location.pathname,
      loginUser: localStorage.getItem("loginUser")
    };
    if (
      localStorage.getItem("loginUser") != null &&
      window.location.pathname != "/login/"
    ) {
      // this.props.history.push('/login');
    //   window.location.pathname = "/login/";
    }
    console.log("url1", window.location.href);
    console.log("url1", window.location.pathname);
    console.log("url3", window.location.pathname);

    
  }

//   componentDidMount(){ 
//     if(localStorage.getItem('loginUser')!=null && window.location.pathname!='/login/'){ 
//       window.location.pathname='/login/';
//     }
//   }

  render() {
    return (
      <div>
        {" "}
        {this.state.activeRoot} User check {this.state.loginUser}{" "}
      </div>
    );
  }
}

export default PrivateRoute;
