import styles from "./styles.module.scss"

export default function Container({ children }: React.PropsWithChildren){

    return(
        <div className={styles.Container}>
            {children}
        </div>
    )
}