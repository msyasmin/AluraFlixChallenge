import React, { useEffect, useState } from 'react';
import './App.css';
import Cabecera from './Componentes/Cabecera/Cabecera';
import Banner from './Componentes/Banner/Banner';
import Categoria from './Componentes/Categoria/Categoria';
import Pie from './Componentes/Pie/Pie';
import Formulario from './Componentes/Formulario/Formulario';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const cambiarMostrar = () => {actualizarMostrar(!mostrarFormulario)}

  const [nomostrarFormulario, noactualizarMostrar] = useState(true)
  const nocambiarMostrar = () => {actualizarMostrar(!nomostrarFormulario)}

  const [videos, actualizarVideos] = useState([]);

  useEffect (() => {
    fetch("https://api-aluraflix-sigma.vercel.app/videos")
    .then((response)=> response.json())
    .then((data)=>{
      actualizarVideos(data);
    });
  },[]);

  const registrarVideo = (video) => {actualizarVideos([...videos, video])}

  const categoria = [
    {
      titulo: "Front End",
      fondo: "#5DADE2"
    },

    {
      titulo: "Back End",
      fondo: "#2ECC71"
    },

    {
      titulo: "Innovación y Gestión",
      fondo: "#F39C12"
    }
  ]

  const eliminarVideo = (id) => {
    const nuevosVideos = videos.filter((video) => video.id !== id)
    actualizarVideos(nuevosVideos)
  }

  const actualizarVideo = (id, datosActualizados) => {
    actualizarVideos(videos.map(video => 
        video.id === id ? { ...video, ...datosActualizados } : video
    ));
  }

  return (
    <div>
      <Cabecera cambiarMostrar={cambiarMostrar} nocambiarMostrar={nocambiarMostrar}/>

      {
        mostrarFormulario && <Formulario
          categoria={categoria.map((categoria) => categoria.titulo)}
          registrarVideo={registrarVideo}
          />

      }

      <Banner />
      
      {
        categoria.map((categoria) => <Categoria 
          datos={categoria} 
          key={categoria.titulo} 
          videos={videos.filter( video => video.categoria === categoria.titulo)}
          eliminarVideo={eliminarVideo}
          actualizarVideo={actualizarVideo}
          />)
      }

      <Pie />

    </div> 
  );
}

export default App;
