
function Card (props) {
    return (
        <div className="card">
            <div onClick={() => props.onDelete(props.item.id)} className="delete">X</div>
                <div>{props.item.id}</div>
                <div>{props.item.content}</div>
        </div>
    )

}




export default Card;