import { useTasks } from "../../hooks/useTasks";
import styles from "./styles.module.scss"
import Task from "./Task";
import { Clipboard } from "react-feather"


export default function TaskList(){
    const { tasks } = useTasks()

    return(
        tasks.length == 0 ? (
            <section className={styles.NoTasksContainer}>
                <Clipboard 
                    color="#333333" 
                    size={60}
                />
                <label>Você ainda não tem tarefas cadastradas</label>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </section>

        )
        
        :

        ( 
            <ul className={styles.Container}>
                {tasks.map(task=>(
                    <Task
                        id={task.id}
                        text={task.text}
                        isDone={task.isDone}
                    />
                ))}
            </ul>
        
        )
    )

}