import React from "react";
import ReactDOM from "react-dom/client";

class TestComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }
    static getDerivedStateFromProps(props, state) {
        return { hello: props.greet };
    }

    componentDidMount() {
        // alert("page is loaded")
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.greet !== this.props.greet) {
            return true;
        }
        else {
            return false
        }
    }


    render() {
        console.log("Component rerendered");
        return (
            <div>
                <h1>
                    GeeksForGeeks.org, Hello 
                    {" " + this.state.hello}
                </h1>
            </div>
        );
    }
}

export default TestComp;