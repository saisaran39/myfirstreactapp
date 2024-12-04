import React from "react";

class ChildComp extends React.Component {
    constructor(props) {
        super(props);

    }

     render() {
        return (
            <div>
                <button onClick={() => this.props.greetHandler('Jayasurya')}>CLick Here</button>
            </div>
        )
     }
}

// ChildComp.propTypes = {
//     greetHandler: PropTypes.func
// }

export default ChildComp;