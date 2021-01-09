import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Counters from './components/Counters';
import Counter from './components/Counter';

import './custom.css'

import NavBar from './components/NavBar';

export default class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counters[index] };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counters[index] };
        counters[index].value--;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    handleRestart = () => {
        window.location.reload();
    };

    render() {
        return (
            <div>
                <NavBar
                    totalCounters={this.state.counters.filter(c => c.value > 0).reduce((a, v) => a = a + v.value, 0)}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        onRestart={this.handleRestart}
                    />
                </main>
            </div>
        );
    }
}

