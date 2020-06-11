import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Connexion extends Component {

    state = {
        pseudo: '',
        goToApp: false
    }

    goToApp = event => {
        event.preventDefault()
        this.setState({ goToApp: true })
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    render() {
        if(this.state.goToApp) {
            return <Redirect push to = {`/pseudo/${ this.state.pseudo }`} />
        }

        return (
            <div className='connexionBox'>
                <form className = 'connexion' onSubmit = { this.goToApp }>
                    <h1>Ma boite à recettes</h1>
                    <input
                        type = 'text'
                        value = { this.state.pseudo }
                        onChange = { this.handleChange }
                        placeholder = 'Nom du chef'
                        required
                        pattern = '[A-Za-z-]{1,}' />
                    <button type = 'submit'>GO !</button>
                    <p>Pas de caractères spéciaux</p>
                </form>
            </div>
        )
    }
}
