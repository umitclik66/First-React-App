import  React  from 'react';
import AppContainer from '../system/AppContainer';

class CountryDetail extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount () { 
      const { fromNotifications } = this.props.location.state
   
    }
    render(){
        return(
            <AppContainer>
            <div>
                <div class="alert alert-warning" role="alert">
                   Dışarıdan gönderilen ülke datası ile verilerin gösterilmesi.
                </div>
                ülke detay 
                {this.props.location.state.id}
                {this.props.location.state.capital}
                {this.props.location.state.flag}
                
            </div>
            </AppContainer>
        )
    }
}

export default CountryDetail;