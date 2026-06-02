
function Clientes({
  clientes,
  nombre,
  telefono,
  direccion,
  setNombre,
  setTelefono,
  setDireccion,
  agregarCliente,
  eliminarCliente
}) {
  return (
    <>
      <h1>Clientes</h1>

      <div className="card mb-3">
        <div className="card-body">

          <input
            className="form-control mb-2"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            className="form-control mb-2"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <input
            className="form-control mb-2"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          <div className="text-center mt-3">
          <button
            className="btn btn-success"
            onClick={agregarCliente}
          >
            Guardar Cliente
          </button>
          </div>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.direccion}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarCliente(cliente.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </>
  )
}

export default Clientes