import React, { useState, useEffect } from 'react';
import styles from './ModalEditar.module.css';
import Formulario from '../Formulario/Formulario';
import { CloseCircleOutlined } from '@ant-design/icons';

const Modal = ({ videoData, onClose, onSave }) => {
    const [datos, setDatos] = useState(videoData);

    useEffect(() => {
        setDatos(videoData);
    }, [videoData]);

    const manejarEnvio = (datosActualizados) => {
        onSave(datosActualizados); 
        onClose();
    }

    return (
        <section className={styles.modal}>
            <div>
                <CloseCircleOutlined className={styles.cerrar} alt="Icono Cerrar" onClick={onClose} />
            </div>
            <Formulario
                registrarVideo={manejarEnvio}
                datosIniciales={datos}
            />
        </section>
    );
}

export default Modal;