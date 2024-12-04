import React from "react";
import ChildComp from "./ChildComp";
class ParentComp extends React.Component {
    constructor(props) {
        super(props);

    }

    greetParent(name) {
        alert(`Hello ${name}`);
    }

     render() {
        return (
            <div>
                <ChildComp greetHandler={this.greetParent} />
            </div>
        )
     }
}

export default ParentComp;