import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }
    generateRandomNum = () => {
        return Math.floor(Math.random() * 8) +1;
    };
    componentWillUnmount() {
        clearTimeout(this.setTimeout)
    }

    handlePullTriggerClick = () => {
        console.log(this.generateRandomNum());
        this.setState({spinningTheChamber: true});
        setTimeout(() => this.setState({chamber: 8}), 2000);
        this.componentWillUnmount();
    }
    displayEvent = () => {
        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!....'
        }
        else if (this.state.chamber === this.bulletInChamber) {
            return 'BANG!!!!'
        }
        else {
            return "you're safe!!"
        }
    }
    render() {
        return (
            <div>
                <p>{this.displayEvent()}</p>
                <button onClick={this.handlePullTriggerClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;