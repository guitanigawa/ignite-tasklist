import styles from "./styles.module.scss" 
import { useState } from "react"
import { useTasks } from "../../hooks/useTasks"
import { PlusCircle } from "react-feather"

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
                required
            />
            <button type="submit">
                <span>Criar</span>
                
                <PlusCircle
                    color="white"
                    size="1rem"
                />
            </button>
        </form>
    )
}