import React from "react";

import ReactDOM from "react-dom";

class TestComponent extends React.Component {
    debugger
    constructor(props) {
        super(props);
        this.state = { username: "Nishanth", email: "" };
    }

    componentDidMount() {
        debugger
    }

    handleBtn = () => {
        this.setState({ username: this.props.name})
    }

    render() {  
        return (
            <div>
                <input type="button" value="Click" onClick={this.handleBtn} />
                {this.state.username}
            </div>
        );
    }
}

export default TestComponent;