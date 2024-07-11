import { useState } from 'react';
import styles from "./Video.module.css";
import ModalEditar from "../ModalEditar/ModalEditar";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Video = (props) => {
    const { titulo, categoria, video, descripcion, id} = props.datos
    const { fondo, eliminarVideo, actualizarVideo} = props
    
    const [modalOpen, setModalOpen] = useState(false)
    const handleEdit = () => setModalOpen(true)

    const handleSave = (datosActualizados) => {
        actualizarVideo(id, datosActualizados);
    };

    return(
        <section>
            <div className={styles.container} style={{borderColor:fondo}}>
                <iframe className={styles.iframe} src={video}/>
                <div className={styles.iconos}>
                    <div>
                        <EditOutlined className={styles.editar} alt="Icono Editar" onClick={handleEdit}/>
                        <span>Editar</span>
                    </div>
                    <div>
                        <DeleteOutlined className={styles.eliminar} onClick={() => eliminarVideo(id)}/>
                        <span>Eliminar</span>
                    </div>

                    {modalOpen && 
                        <ModalEditar
                            videoData={{ titulo, categoria, video, descripcion }} 
                            onClose={() => setModalOpen(false)} 
                            onSave={handleSave}
                        />
                    }
                    
                </div>  
            </div>
        </section>
        
    )
}

export default Video