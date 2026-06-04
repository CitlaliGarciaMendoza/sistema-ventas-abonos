import { useState } from 'react'
import Clientes from './pages/Clientes'
import Ventas from './pages/Ventas'
import Abonos from './pages/Abonos'

function App() {
  /* Const es para guaradar datos*/
  /* Dashboard */


  /* Abonos*/
  const [abonos, setAbonos] = useState([])
  const saldoPendiente = ventas.reduce((total, venta) => total + venta.saldo, 0)
  /* Ventas*/
  const [ventas, setVentas] = useState([])

  /* Clientes*/
  const [pantalla, setPantalla] = useState("dashboard")
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [direccion, setDireccion] = useState("")
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      telefono: "4421234567",
      direccion: "Querétaro"
    },
    {
      id: 2,
      nombre: "María López",
      telefono: "4429876543",
      direccion: "Corregidora"
    }
  ])

  const agregarCliente = () => {
    const nuevoCliente = {
      id: clientes.length + 1,
      nombre,
      telefono,
      direccion
    }

    setClientes([...clientes, nuevoCliente])

    setNombre("")
    setTelefono("")
    setDireccion("")
  }

  const eliminarCliente = (id) => {
    setClientes(clientes.filter(cliente => cliente.id !== id))
  }


  return (
    <div className="container-fluid">
      <div className="row vh-100">

        {/* Menú lateral */}
        <div className="col-2 bg-dark text-white p-3">
          <h4>CGMl</h4>
          <hr />

          <ul className="nav flex-column">

            <li className="nav-item mb-2">
              <button
                className="btn btn-outline-light w-100"
                onClick={() => setPantalla("dashboard")}
              >
                Dashboard
              </button>
            </li>

            <li className="nav-item mb-2">

              <button
                className="btn btn-outline-light w-100"
                onClick={() => setPantalla("clientes")}
              >
                Clientes

              </button>

            </li>

            <li className="nav-item mb-2">
              <button
                className="btn btn-outline-light w-100"
                onClick={() => setPantalla("ventas")}
              >
                Ventas
              </button>
            </li>

            <li className="nav-item mb-2">
              <button
                className="btn btn-outline-light w-100"
                onClick={() => setPantalla("abonos")}
              >
                Abonos
              </button>
            </li>

            <li className="nav-item mb-2">
              <button
                className="btn btn-outline-light w-100"
                onClick={() => setPantalla("reportes")}
              >
                Reportes
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido */}
        <div className="col-10 bg-light p-4">

          {pantalla === "dashboard" && (
            <>
              <h1>Dashboard</h1>
              <p>Bienvenida al sistema.</p>

              <div className="row mt-4">
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-body">
                      <h5>Ventas Hoy</h5>
                      <h3>{ventas.length}</h3>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="card-body">
                      <h5>Abonos Hoy</h5>
                      <h3>$0.00</h3>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="card-body">
                      <h5>Clientes</h5>
                      <h3>{clientes.length}</h3>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="card-body">
                      <h5>Saldo Pendiente</h5>
                      <h3> ${saldoPendiente.toLocaleString('es-MX')}</h3>
                    </div>
                  </div>
                </div>

              </div>
            </>
          )}

          {pantalla === "clientes" && (
            <Clientes
              clientes={clientes}
              nombre={nombre}
              telefono={telefono}
              direccion={direccion}
              setNombre={setNombre}
              setTelefono={setTelefono}
              setDireccion={setDireccion}
              agregarCliente={agregarCliente}
              eliminarCliente={eliminarCliente}
            />
          )}

          {pantalla === "ventas" && (
            <Ventas
              clientes={clientes}
              ventas={ventas}
              setVentas={setVentas}
            />
          )}

          {pantalla === "abonos" && (
            <Abonos
              ventas={ventas}
              setVentas={setVentas}
              abonos={abonos}
              setAbonos={setAbonos}
            />
          )}

          {pantalla === "reportes" && (
            <h1>Reportes</h1>
          )}


        </div>

      </div>
    </div>
  )
}

export default App