import { useState } from 'react'

function Ventas({ clientes, ventas, setVentas }) {

    const [clienteId, setClienteId] = useState("")
    const [total, setTotal] = useState("")
    const guardarVenta = () => {

        if (!clienteId || !total) {
            alert("Complete los datos")
            return
        }

        const cliente = clientes.find(
            c => c.id === Number(clienteId)
        )

        const nuevaVenta = {
            id: ventas.length + 1,
            cliente: cliente.nombre,
            fecha: new Date().toLocaleDateString(),
            total: Number(total),
            saldo: Number(total)
        }

        setVentas([...ventas, nuevaVenta])

        setClienteId("")
        setTotal("")
    }

    return (
        <>
            <h1>Ventas</h1>
            <div className="card">
                <div className="card-body">

                    <div className="mb-3">
                        <label className="form-label">
                            Cliente
                        </label>

                        <select className="form-select"
                            value={clienteId}
                            onChange={(e) => setClienteId(e.target.value)}>
                            <option value="">
                                Seleccione un cliente
                            </option>

                            {clientes.map(cliente => (
                                <option
                                    key={cliente.id}
                                    value={cliente.id}
                                >
                                    {cliente.nombre}
                                </option>
                            ))}

                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Total
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            placeholder="0.00"
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                        />
                    </div>
                    <div className="text-center mt-3">
                    <button className="btn btn-success"
                        onClick={guardarVenta}>
                        Guardar Venta
                    </button>
                    </div>

                </div>
            </div>

            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Fecha</th>
                        <th>Total</th>
                        <th>Saldo</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map(venta => (
                        <tr key={venta.id}>
                            <td>{venta.cliente}</td>
                            <td>{venta.fecha}</td>
                            <td> ${Number(venta.total).toLocaleString('es-MX')}</td>
                            <td> ${Number(venta.saldo).toLocaleString('es-MX')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Ventas