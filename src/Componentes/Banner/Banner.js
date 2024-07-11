import styles from "./Banner.module.css";

function Banner(){

    return(
        <section className={styles.fondo}>
            <div>
                <h1>Front End</h1>
                <h2>Challenge React</h2>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div>
                <iframe className={styles.iframe} src="https://www.youtube.com/embed/ov7vA5HFe6w"/>
            </div>
        </section>
    )
}

export default Banner