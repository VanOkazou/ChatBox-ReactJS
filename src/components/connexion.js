// REACT
import React from 'react';

class Connexion extends React.Component {


    goToChat = e => {
        e.preventDefault();

        // Get pseudo
        const pseudo = this.pseudoInput.value;

        // Change url (this.context = parent)
        this.props.history.push(`/pseudo/${pseudo}`);


    };

    render() {
        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={ e => this.goToChat(e) }>
                    <input 
                        type="text" 
                        placeholder="Pseudo" 
                        required autoFocus 
                        ref={ input => { this.pseudoInput = input } } 
                    />
                    <button type="submit">Start to chat</button>
                </form>
            </div>
        )
    }
}


export default Connexion;