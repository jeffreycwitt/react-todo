var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
//var TodoList = require("TodoList");

export var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0){
        this.refs.todoText.value = '';
        dispatch(actions.startAddTodo(todoText));
    }
    else{
      this.refs.todoText.focus();
    }

  },
  render: function(){
    return(
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="what do you need to do?"></input>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }


});

export default connect()(AddTodo);
