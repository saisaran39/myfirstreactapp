import React from "react";

import ReactDOM from "react-dom";

class ContactUs extends React.Component {
    state = { username: "Nishanth", email: "" };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState((prev) => ({
            username: "gfg123",
            email: "abc@gfg.org",
        })
      );
    };

    render() {  
        return (
            <div
                style={{
                    margin: "auto",
                    marginTop: "20px",
                    textAlign: "center",
                }}
            >
                <form onSubmit={this.onFormSubmit}>
                    <label> Enter username: </label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={(e) =>
                            this.setState((prev) => ({
                                ...prev,
                                username: e.target.value,
                            }))
                        }
                    />
                    <br />
                    <br />
                    <label>Enter Email Id:</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={(e) =>
                            this.setState((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                    ></input>
                    <br />
                    <br />
                    <input type="button" value={"Submit"} />
                </form>
                <br />
                <div>
                    Entered Value: {this.state.username}
                </div>
            </div>
        );
    }
}

export default ContactUs;