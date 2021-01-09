import React, { Component } from 'react';
import Counter from './Counter';
import { GrClearOption } from "react-icons/gr";
import { MdAutorenew } from "react-icons/md";


export default class Counters extends Component {
    render() {
        const {
            onReset,
            onIncrement,
            onDelete,
            onDecrement,
            counters,
            onRestart
        } = this.props;
        return (
            <div>
                <button
                    className="btn btn-success m-2"
                    onClick={onReset}
                    disabled={counters.length === 0 ? "disabled" : ""}
                >
                    <GrClearOption />
                </button>
                <button
                    className="btn btn-primary m-2"
                    onClick={onRestart}
                    disabled={counters.length !== 0 ? "disabled" : ""}
                >
                    <MdAutorenew />
                </button>
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        );
    }
}

