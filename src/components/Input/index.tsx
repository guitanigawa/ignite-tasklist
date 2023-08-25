import styles from "./styles.module.scss"
import Plus from "../../assets/plus.svg"   

export default function Input(){


    return(
        <form className={styles.Container}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button type="submit">
                Criar
                <img src={Plus} alt="Plus"/>
            </button>
        </form>
    )
}