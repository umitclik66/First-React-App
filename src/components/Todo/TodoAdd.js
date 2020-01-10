import React from "react";

class TodoAdd extends React.Component{

    constructor(props){
        super(props);

        this.state={
            todoName : ""
        };
    }
    onAddTodo(e){
        console.log(this.state.todoName);
    }

    onChangeTodoMane(e){
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    onAddSubmit(e){
        const {addTodo}=this.props;

        const newTodo={
            id : Math.random(),
            name:this.state.todoName
        }

        addTodo(newTodo);

        e.preventDefault();
    }

    render(){
        return (
            <div className="container">
                
                <form onSubmit={this.onAddSubmit.bind(this)}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Görev adi</label>
                        <input  className="form-control" type="text" name="todoName" id="todoName" value={this.state.todoName} 
                        placeholder="Görev "
                        onChange={this.onChangeTodoMane.bind(this)} />
                    </div>
                    <div class="form-group">
                        <button onClick={this.onAddTodo.bind(this)} className="btn btn-primary">Ekle</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default  TodoAdd;