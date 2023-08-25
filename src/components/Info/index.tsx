import styles from "./styles.module.scss"


export default function Info(){

    return(
        <section className={styles.Container}>
            <label className={styles.created}>
                Tarefas criadas 
                <span>0</span>
            </label>

            <label className={styles.finished}>
                Concluídas 
                <span>0</span>
            </label>
        </section>
    )
}