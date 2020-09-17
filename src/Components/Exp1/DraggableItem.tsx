import React, {FC} from "react";
import {Draggable} from "react-beautiful-dnd";
import {Author} from "./types";
import './DraggableItem.css'

interface Props {
    quote: Author,
    id: string,
    idx: number
}

const DraggableItem: FC<Props> = ({quote, id, idx}) => {
    return (
        <Draggable
            draggableId={id}
            index={idx}
        >
            {(provided, snapshot) => (
                <div
                    className='containerDraggableItem'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p>Имя: {quote.name}</p>
                    <p>Url: {quote.avatarUrl}</p>
                    <img src={quote.avatarUrl} alt={quote.name}/>
                </div>
            )}
        </Draggable>
    )
}

export default DraggableItem;