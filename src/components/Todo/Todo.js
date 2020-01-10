import React from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd'; 
class Todo extends React.Component{

    constructor(props){
        super(props);

        this.deleteItem=this.deleteItem.bind(this);
        this.addTodo=this.addTodo.bind(this);
        this.state={
            todo:[
                {id:1 , name:"uygulama güncelle"},
                {id:2 , name:"todo sayfasının dinamik hale getirilmesi"}
            ]
        };
    }

    deleteItem(deletedObj){
        let updatedTodoItems=this.state.todo;
 
        updatedTodoItems = updatedTodoItems.filter(todoID => todoID.id != deletedObj.id);

        this.setState({
                todo : updatedTodoItems
            });
 
    }

    addTodo(newTodo) {
        let updatedTodo=this.state.todo;

        updatedTodo.push(newTodo);
        
        this.setState({
            todo : updatedTodo
        });
    }

    render(){
        return(
            <div>
                <div class="alert alert-warning" role="alert">
                    Statik state üzerindeki datanın ekle çıkar todo uygulaması yapılması. 
                </div>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Görev</th>
      <th scope="col">Sil</th>
    </tr>
  </thead>
  <tbody>
    
            {
                this.state.todo.map( todoItem => {
                    const {id,name} = todoItem;
                    return  <TodoItem 
                    key={id} 
                    id={id} 
                    name={name} 
                    deleteItem={this.deleteItem} />

                })
            } 
    </tbody>
</table>
                

                yeni Ekle
                <hr />
                <TodoAdd addTodo={this.addTodo} />
               
            </div>
          
        );
    }

}

export default Todo;