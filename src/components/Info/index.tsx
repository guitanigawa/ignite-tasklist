import { useTasks } from "../../hooks/useTasks"
import styles from "./styles.module.scss"


export default function Info(){
    const { tasks } = useTasks()


    return(
        <section className={styles.Container}>
            <label className={styles.created}>
                Tarefas criadas 
                <span>{tasks.length}</span>
            </label>

            <label className={styles.finished}>
                Concluídas 
                <span>
                    {tasks.filter(task=>task.isDone == true).length} 
                    {' '}
                    de
                    {' '}
                    {tasks.length}

                </span>
            </label>
        </section>
    )
}