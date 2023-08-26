import { Trash2 } from "react-feather"
import styles from "./styles.module.scss"
import { useState } from "react"
import { useTasks } from "../../../hooks/useTasks"

type TrashColorType = "gray" | "red"

interface TaskProps{
    id: number,
    text: string,
    isDone: boolean
}

export default function Task({
    id,
    text,
    isDone
}: TaskProps){
    const [trashColor, setTrashColor] = useState<TrashColorType>("gray")
    const { deleteTask, toggleTaskDone} = useTasks()

    return (
        <li 
            className={styles.Container}
            key={id}    
        >   
            <input 
                type="checkbox"
                onChange={()=>toggleTaskDone(id)}
            />
            
            <label
                className={isDone ? styles.done : ""}
            >
                {text}
            </label>

            <span
                onMouseEnter={()=>setTrashColor("red")}
                onMouseLeave={()=>setTrashColor("gray")}
                onClick={()=>deleteTask(id)}
            >
                <Trash2
                    color={trashColor}
                    size="1rem"
                    className={styles.deleteButton}
                />
            </span>
        </li>
    )
}