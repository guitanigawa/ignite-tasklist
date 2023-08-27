import { Trash2, Edit, Send } from "react-feather"
import styles from "./styles.module.scss"
import { useState } from "react"
import { useTasks } from "../../../hooks/useTasks"

type ColorsType = "gray" | "red" | "white"

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
    
    const [trashColor, setTrashColor] = useState<ColorsType>("gray")
    const [editColor, setEditColor] = useState<ColorsType>("gray")
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [currentEditedTask, setCurrrentEditedTask] = useState<string>(text)
    const { deleteTask, toggleTaskDone, editTask } = useTasks()

    const handleEditForm = (e: React.FormEvent) => {
        e.preventDefault()

        editTask(id, currentEditedTask)
        setIsEditing(false)
    }


    return (
        <li 
            className={styles.Container}
            key={id}    
        >   
            <input 
                type="checkbox"
                onChange={()=>toggleTaskDone(id)}
            /> 

            {
                isEditing ? (
                    <form onSubmit={handleEditForm}>
                        <input 
                            type="text" 
                            placeholder="Edite sua tarefa..."
                            onChange={e=>setCurrrentEditedTask(e.target.value)}
                            value={currentEditedTask}
                            required
                        />

                        <button type="submit">
                            <Send
                                color="white"
                                size="1rem"
                            />
                        </button>
                    </form>
                )
                
                :

                (
                    <label
                        className={isDone ? styles.done : ""}
                    >
                        {text}
                    </label>
                )

            }

            <span>
                <Trash2
                    color={trashColor}
                    size="1rem"
                    onMouseEnter={()=>setTrashColor("red")}
                    onMouseLeave={()=>setTrashColor("gray")}
                    onClick={()=>deleteTask(id)}
                    cursor="pointer"
                />

                <Edit
                    color={editColor}
                    size="1rem"
                    onMouseEnter={()=>setEditColor("white")}
                    onMouseLeave={()=>setEditColor("gray")}
                    onClick={()=>setIsEditing(!isEditing)}
                    cursor="pointer"
                />
            </span>
        </li>
    )
}