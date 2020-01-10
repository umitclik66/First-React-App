import React from "react";
import AppContainer from "../system/AppContainer";

class EditCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoName: ""
    };
  }

  render() {
    return (
      <AppContainer>
        <div>
          Kategori detay
          {this.props.location.state.category.id}
          {this.props.location.state.category.name}
        </div>
      </AppContainer>
    );
  }
}

export default EditCategory;
