import styles from "./styles.module.scss"
import Rocket from "../../assets/rocket.svg"


export default function Header(){
    return(
        <header className={styles.Container}>
            <img src={Rocket} alt="rocket"/>
                
            <h1>
                <span>
                    to
                </span>
                do
            </h1>
        </header>
    )
}