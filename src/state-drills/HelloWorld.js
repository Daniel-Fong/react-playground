import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    };
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={e => this.setState({who: 'world!'})}>World</button>
                <button onClick={e => this.setState({who: 'friend!'})}>Friend</button>
                <button onClick={e => this.setState({who: 'React!'})}>React</button>
            </div>
        )
    }
}

export default HelloWorld;