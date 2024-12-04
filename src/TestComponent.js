import React from "react";
import ReactDOM from "react-dom";

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "Nishanth", email: "" };
    }

    componentDidMount() {
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

// TestComponent.propTypes = {
//     name: PropTypes.string
// }

// TestComponent.defaultProps = {
//     name: 'Testing'
// }

export default TestComponent;