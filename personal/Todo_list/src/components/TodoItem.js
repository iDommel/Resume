import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none',
            color: this.props.todo.completed ?'#009900' : '#000000',
            backgroundColor: this.props.todo.completed ?'#99ff99' : '#ebebe0',
        }
    }

    render() {
        const { id, title} = this.props.todo;
        return (
                <div className="col" style={this.getStyle()}>
                    <p>
                        <input type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}/>
                        {' '}{title}
                        <button type="button" style={delBtnStyle}
                        className="btn btn-danger" onClick={this.props.delTodo.bind(this, id)}>Delete</button>
                    </p>
                </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const delBtnStyle = {
    float: 'right'

}
export default TodoItem