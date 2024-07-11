import React, { useState } from "react";
import styles from "./Formulario.module.css";
import CampoTexto from "../CampoTexo/Campotexto";
import ListaOpciones from "../ListaOpciones/Listaopciones";

const Formulario = ({registrarVideo, datosIniciales, seleccionarCategoria}) => {

    const [titulo, actualizarTitulo] = useState(datosIniciales ? datosIniciales.titulo : "");
    const [categoria, actualizarCategoria] = useState(datosIniciales ? datosIniciales.categoria : "");
    const [video, actualizarVideo] = useState(datosIniciales ? datosIniciales.video : "");
    const [descripcion, actualizarDescripcion] = useState(datosIniciales ? datosIniciales.descripcion : "");

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            titulo,
            categoria,
            video,
            descripcion
        }
        registrarVideo(datosAEnviar)

        actualizarTitulo("");
        actualizarCategoria("");
        actualizarVideo("");
        actualizarDescripcion("");
    }

    return <section className={styles.formulario}>
        <form onSubmit={manejarEnvio} >
            <h1>{datosIniciales ? "Editar Video" : "NUEVO VIDEO"}</h1>
            <h2>Complete el formulario para {datosIniciales ? "actualizar" : "crear"} la tarjeta de video</h2>
            <div>
                <h3>{datosIniciales ? "Editar Tarjeta" : "Crear Tarjeta"}</h3>
            </div>
            <CampoTexto
                titulo="Título"
                placeholder="Ingrese el título"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <ListaOpciones
                valor={categoria}
                actualizarCategoria={actualizarCategoria}
                categoria={seleccionarCategoria}
                required
            />
            <CampoTexto
                titulo="Video"
                placeholder="Ingrese el enlace del video"
                required
                valor={video}
                actualizarValor={actualizarVideo}
            />
            <CampoTexto
                titulo="Descripción"
                placeholder="¿De qué se trata el video?"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />

            <section className={styles.botones}>
              <button type="submit" className={styles.guardar}>Guardar</button>
              <button type="button" className={styles.limpiar} onClick={() => {
                            actualizarTitulo("");
                            actualizarCategoria("");
                            actualizarVideo("");
                            actualizarDescripcion("");
                        }}>Limpiar</button>
            </section>

        </form>
    </section>
}

export default Formulario
