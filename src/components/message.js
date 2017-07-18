// REACT
import React from 'react';

class Message extends React.Component {

    preRender = isUser => {
        if (isUser) {
            return (
                <p className="user-message">
                    { this.props.data.message }
                </p>
            )
        } else {
            return (
                <p className="not-user-message">
                    <strong>{ this.props.data.pseudo } :</strong> { this.props.data.message }
                </p>
            )
        }
    };
    
    render() {
        return this.preRender(this.props.isUser(this.props.data.pseudo));
    }
}

export default Message;