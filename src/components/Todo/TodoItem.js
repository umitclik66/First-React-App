import React from 'react';


class TodoItem extends React.Component{

    constructor(props){
        super(props); 
    }

    onDeleteClick(id,e){
        const {deleteItem}=this.props;
        deleteItem(id);
    }

    render(){
        
        const {id,name} =  this.props;
        return(
            <tr>
                <td scope="row">{id}</td>
                <td>{name}</td> 
                <td> <button className="btn btn-danger btn-sm" onClick={this.onDeleteClick.bind(this,{id})}>sil</button>
                    </td>
            </tr>
        );
    }

}

export default TodoItem;