import React from 'react'; 

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginAction} from '../../actions/LoginAction';
import { Link,Redirect } from 'react-router-dom';  

class UserDetail extends React.Component{
    constructor (props){
        super(props);
    }

    componentDidMount(){ 
        /*if(this.props.loginState.loginUser==null){
            this.props.history.push('/login');
        }*/
    }

    render(){
        return(
            <div>üye bilgi sayfası</div>
        );
    }


}

// export default UserDetail;


function mapStateToProps(state){
    return {
        loginState: state.login
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        loginAction: LoginAction
    },dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(UserDetail); 