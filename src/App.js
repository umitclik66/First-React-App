import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import Reducers from "./Reducers";

import Todo from "./components/Todo/Todo";
import LocalStorageTest from "./components/Info/LocalStorageTest";
import GetDataFromApi from "./components/Info/GetDataFromApi";
import CountryList from "./components/Info/CountryList";
import CountryDetail from "./components/Info/CountryDetail";
import Top from "./components/MasterPages/Top";
import Contact from "./components/contact/contact";
import NewsList from "./components/News/NewsList";
import CategoryList from "./components/category/CategoryList";
import AddCategory from "./components/category/AddCategory";
import EditCategory from "./components/category/EditCategory";
import Login from "./components/login/Login";
import NewsEdit from "./components/News/NewsEdit";
import HookPage from "./components/HooksExam/HookPage";
import UserDetail from "./components/user/UserDetail";
import PrivateRoute from "./components/system/PrivateRoute";
import { history } from "./components/system/history";

import { Router, BrowserRouter, Switch, Route, Link } from "react-router-dom";

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

class App extends React.Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      this.checkUserLogin(location.pathname);
      //alert(location.pathname);
      // this.props.clearAlerts();
    });

    this.state = {
      authorized: false
    };

    // if(localStorage.getItem('loginUser')!=null && window.location.pathname!='/login/'){
    //   // this.props.history.push('/login');
    //   window.location.pathname='/login/';
    // }
    // console.log("url1",window.location.href);
    // console.log("url1",window.location.pathname);
  }

  checkUserLogin(path) {
    if (localStorage.getItem("loginUser") == null) {
      this.setState({
        authorized: false
      });

      if(path!='/login/' && path!=undefined){
        alert("logout et kullanıcıyı"+path);
        window.location.pathname = "/login/";
      } 
    } else {
      this.setState({
        authorized: true
      });
      if(path=='/login/'){
        window.location.pathname = "/todo/";
        //alert("login ise ve giriş sayfasını açmışsa todo yönlendir.....");
      }
    }
  }

  componentDidMount() {
    this.checkUserLogin()
  }


  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            {this.state.authorized ? <Top /> : <div></div>}

            {/* {localStorage.getItem("loginUser")?alert(localStorage.getItem("loginUser")): alert('deneme') }  */}
            <div className="container">
              {/* <PrivateRoute exact path="/" component={Todo} /> */}
              <PrivateRoute />
              <Route path="/" exact component={Todo} />
              <Route path="/local-storage-test/" component={LocalStorageTest} />
              <Route path="/todo/" component={Todo} />
              <Route path="/get-data-from-api/" component={GetDataFromApi} />
              <Route path="/country-list/" component={CountryList} />
              <Route path="/country-detail/" component={CountryDetail} />
              <Route path="/contact/" component={Contact} />
              <Route path="/NewsList/" component={NewsList} />
              <Route path="/categories/" component={CategoryList} />
              <Route path="/add-category/" component={AddCategory} />
              <Route path="/edit-category/" component={EditCategory} />
              <Route path="/login/" component={Login} />
              <Route path="/edit-news" component={NewsEdit} />
              <Route path="/hook-page" component={HookPage} Came="deneme" />
              <Route path="/user-detail" component={UserDetail} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
