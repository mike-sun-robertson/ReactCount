import React, { Component } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { IoRemoveCircle } from "react-icons/io5";

export default class Counter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1">
                        <span style={{ fontSize: 24 }} className={this.setClass()}>
                            {this.showCount()}
                        </span>
                    </div>
                    <div className="col-md-4">
                        <button
                            className="btn btn-secondary"
                            onClick={() => this.props.onIncrement(this.props.counter)}
                        >
                            <IoAddCircle /> 
                        </button>
                        <button
                            className="btn btn-info m-2"
                            onClick={() => this.props.onDecrement(this.props.counter)}
                            disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >
                            <IoRemoveCircle />
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    setClass = () => {
        let classes = "badge m-2 badge-";
        if (this.props.counter.value === 0) {
            classes += "warning";
        } else {
            classes += "primary";
        }
  
        return classes;
    };

    showCount = () => {
        const { value } = this.props.counter;
        if (value === 0) {
            return "Zero";
        } else {
            return value;
        }
    };
}
