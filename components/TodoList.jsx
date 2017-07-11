import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
    render() {

        var todoList = this.props.data.map((todo) => <Todo title={todo.title} key={todo.title}>{todo.detail}</Todo>);

        return (
            <div className="todoList">
                <table style={{ border: "2px solid black" }}>
                    <tbody>
                        {todoList}
                    </tbody>
                </table>
            </div>
        );
    }
}