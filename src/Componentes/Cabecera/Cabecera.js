import styles from "./Cabecera.module.css";
import logo from "./Logoaluraflix.png";

const Cabecera = (props) => {

    return (
        <header className={styles.cabecera}>
                <section>
                    <img src={logo} alt="logo"/>
                </section>

            <nav className={styles.boton}>
                <button onClick={props.nocambiarMostrar}>Home</button>
                <button onClick={props.cambiarMostrar}>Nuevo Video</button>
            </nav>
        </header>
    )
}

export default Cabecera;