import styles from "./Listaopciones.module.css";

const ListaOpciones = (props) => {

    const categoria = [
        "Front End",
        "Back End",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        props.actualizarCategoria(e.target.value)
    }

    return <div className={styles.listaopciones}>
        <label>Categoría</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoría</option>
            {categoria.map((categoria) => <option key={categoria}>{categoria}</option>)}
        </select>
        </div>

}

export default ListaOpciones