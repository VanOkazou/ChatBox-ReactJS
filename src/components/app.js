// REACT
import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Formulaire from './formulaire';
import Message from './message';

// DATABASE
import base from '../base';

// CSS
import { CSSTransitionGroup as Transition } from 'react-transition-group';
import '../animation.css';

class App extends React.Component {

    state = {
        messages: {}
    }

    // LIFECYCLES
    componentWillMount() {
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    componentDidUpdate() {
        // Scroll to bottom
        this.messagesBox.scrollTop = this.messagesBox.scrollHeight;
    }

    // FUNCTIONS
    addMessage = msg => {
        // Copy state
        const messages = {...this.state.messages} // ... for getting all

        // Add the new message with a timestamp
        const timestamp = Date.now();
        messages[`msg-${timestamp}`] = msg;

        // Delete if more than 10 messages
        Object.keys(messages).slice(0, -10).map(key => messages[key] = null);

        // Update the state
        this.setState({ messages });
    };

    isUser = pseudo => {
        return pseudo === this.props.match.params.pseudo;
    };


    render() {
        let messages = [];
        if(this.state.messages) {
            messages = Object
                        .keys(this.state.messages)
                        .map(key => <Message key={ key } data={this.state.messages[key]} isUser={ this.isUser } />);
        }

        return (
            <div className="box">
                <div>
                    <div className="messages" ref={ div => this.messagesBox = div }>
                        <Transition
                            component="div"
                            className="message"
                            transitionName="message"
                            transitionEnterTimeout={ 200 }
                            transitionLeaveTimeout={ 200 }
                        >
                            { messages }
                        </Transition>
                    </div>
                    <Formulaire addMessage={this.addMessage} pseudo={ this.props.match.params.pseudo } length={150} />
                </div>
            </div>
        )
    }
}

App.propTypes = {
  match: PropTypes.object.isRequired
};

export default App;