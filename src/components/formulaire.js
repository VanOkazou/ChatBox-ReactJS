// REACT
import React from 'react';
import PropTypes from 'prop-types';

class Formulaire extends React.Component {

    state = {
        length: this.props.length
    }

    createMessage = e => {
        e.preventDefault();

        const msg = {
            message: this.message.value,
            pseudo: this.props.pseudo
        };

        this.props.addMessage(msg);

        // Reset the form
        this.form.reset();
        const length = this.props.length;
        this.setState({ length });
    }

    counter = e => {
        let length = this.props.length - this.message.value.length;
        this.setState({ length });
    };

    render() {
        return (
            <form
                className="form"
                onSubmit={ e => this.createMessage(e) }
                ref={ form => this.form = form }
            >
                <textarea
                    required
                    maxLength={ this.props.length }
                    ref= { textarea => this.message = textarea }
                    onChange = { e => this.counter(e) }
                ></textarea>

                <div className="info">
                     { this.state.length }
                </div>

                <button type="submit" >Send</button>
            </form>
        )
    }
}

Formulaire.propTypes = {
  addMessage: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default Formulaire;