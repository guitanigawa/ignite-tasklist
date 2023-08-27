import styles from "./styles.module.scss"
import Plus from "../../assets/plus.svg"   
import { useState } from "react"
import { useTasks } from "../../hooks/useTasks"

export default function Input(){
    const [currentText, setCurrentText] = useState<string>("")
    const { createTask } = useTasks()


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        

        createTask(currentText)
        setCurrentText("")
    }


    return(
        <form 
            className={styles.Container}
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                onChange={(e)=>setCurrentText(e.target.value)}
                value={currentText}
            />
            <button type="submit">
                Criar
                <img src={Plus} alt="Plus"/>
            </button>
        </form>
    )
}