import React, { Component } from 'react'
import Card from './Card'
import FormAddCard from './FormAddCard'

class CRUD extends Component {

    state = {
        cards: [],
    }

    componentDidMount() {
        this.getCards();
    }

    getCards = () => {
        fetch('http://localhost:7777/notes')
            .then(response => response.json())
            .then(cards => {
                this.setState({ cards })
            })
    }

    onItemDelete = (id) => {
        fetch(`http://localhost:7777/notes/${id}`, {
            method: 'DELETE',
        });
        this.getCards()
    }

    onAddCard = (body) => {
        fetch('http://localhost:7777/notes', {
            method: 'POST',
            body: JSON.stringify(body)
        }).then(() => {
            this.getCards()
        })
    }



    render() {
        return (
            <div>
                <button onClick={this.getCards}>Обновить</button>
                <FormAddCard onAdd={this.onAddCard} />
                {this.state.cards.map(item => <Card item={item} key={item.id} onDelete={this.onItemDelete} />)}
            </div>
            );
    
    }
}


export default CRUD;