import React from "react";
import '../styles/main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 10
        }
    }

    incrementCount = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        );
    }
    decrementCount = () => {
        this.setState(
            {
                count: this.state.count - 1
            }
        );
    }

    render() {
        return (
            <div className='main-wrapper'>
                <button onClick={this.incrementCount}>Increase</button>
                <span>{this.state.count}</span>
                <button onClick={this.decrementCount}>Decrease</button>
            </div>
        )
    }
}

export default Main;