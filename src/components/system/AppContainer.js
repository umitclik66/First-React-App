import React from "react";

export default class AppContainer extends React.Component {
  componentWillMount() {
    // if (localStorage.getItem("loginUser") == null) {
    //   window.location.pathname = "/login/";
    // }
  }

  render() {
    return (
      <div>
        <label>{this.props.error}</label>
        {this.props.loading && (
          <div
          id="loading"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "#fff",
display:"table"
            }}
          >
             <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            width="100"
            style={{display:"table-cell",alignItems:"center",marginLeft:"auto",marginRight:"auto",marginTop:"48vh"}}
          />
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
