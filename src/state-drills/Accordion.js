import React from 'react';

class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        index: 0
    }
}
    static defaultProps = { sections: []};

    handleClick () {
        debugger
        this.setState({state: 3})
    }

    render = () => {
        const lis = this.props.sections.map((section, index) => 
                <li key={index}>
                    {this.props.sections.length && (
                        <div>
                            {() => this.state.index}
                            <button onClick={() => this.handleClick()}>{section.title}</button>
                            <p className='isClosed'></p>
                        </div>
                    )} 
                </li>
        )
        return (
            <ul>
                {lis}
            </ul>
        )
    }   
}

export default Accordion;