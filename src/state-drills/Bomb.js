import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    }
    componentDidMount() {
    this.interval = setInterval(e => this.setState({count: this.state.count +1}) , 1000)
    };
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    displayText (num) {
        if (num >= 8) {
            this.componentWillUnmount();
            return 'BOOM!!!!';    
        }
        else if (num % 2 === 0) {
            return 'tick'
        }
        else {
            return 'tock'
        }
    }
    render() {
        return(
            <div>
                <p>{this.displayText(this.state.count)}</p>
            </div>
        )
    }
}

export default Bomb;