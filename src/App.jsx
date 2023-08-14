import { useEffect, useState } from 'react'
import './App.css'
import api from '../api'

function App() {
  const [usuarios, setUsuarios] = useState([])

  const obtenerUsuarios = async (req, res) => {
      try {
        const resp = await api.get("/admin/usuarios")
        console.log(resp)
        setUsuarios(resp.data.usuarios)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      obtenerUsuarios();
    }, []);


    return (
    <>
      
    </>
  )
}

export default App
