import {useState} from 'react'
import { nanoid } from 'nanoid'

function FormAddCard (props) {
    const [card, setCard] = useState({
        id: '',
        content: '',
    });

    const onChangeText = (e) => {
        setCard(newCard => ({
            ...newCard,
            content: e.target.value,
            id: nanoid()
        }));
    }


    const onAddForm = (e) => {
        e.preventDefault();
        props.onAdd(card)
    }


    return (
    <form onSubmit={onAddForm}>
        <textarea onChange={onChangeText}></textarea>
        <button>Добавить</button>
    </form>
    )
}

export default FormAddCard;