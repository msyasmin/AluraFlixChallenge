import styles from "./Categoria.module.css";
import Video from "../Video/Video";

const Categoria = (props) => {
    const {titulo, fondo} = props.datos
    const { videos, eliminarVideo, actualizarVideo } = props

    return <>
        { videos.length > 0 &&
            <section className={styles.categoria}>
            <h3 style={{backgroundColor: fondo}}>{titulo}</h3>
            <div className={styles.video}>
                {
                    videos.map((video, index) => <Video 
                        datos={video} 
                        key={index}
                        fondo={fondo}
                        eliminarVideo={eliminarVideo}
                        actualizarVideo={actualizarVideo}
                    />)
                }
            </div>
    </section>

    }
    </>
}

export default Categoria