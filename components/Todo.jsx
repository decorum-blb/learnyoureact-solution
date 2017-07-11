import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }

    handleChange(todo) {
        this.setState({ checked: todo.target.checked });
    }

    render() {
        return (
            <tr>
                <td style={style.tableContent}>
                    <input type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleChange} />
                </td>
                <td style={style.tableContent}>
                    {this.props.title}
                </td>
                <td style={style.tableContent}>
                    {this.props.children}
                </td>
            </tr>
        );
    }
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

let style = {
    tableContent: {
        border: "1px solid black"
    }
};