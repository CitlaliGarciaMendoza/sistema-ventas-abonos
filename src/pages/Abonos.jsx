import { useState } from 'react'

function Abonos({
    ventas,
    setVentas,
    abonos,
    setAbonos

}) {

    const [ventaId, setVentaId] = useState("")
    const [importe, setImporte] = useState("")

    const guardarAbono = () => {

        if (!ventaId || !importe) {
            alert("Complete los datos")
            return
        }

        const importeNumero = Number(importe)

        const ventaSeleccionada = ventas.find(
            v => v.id === Number(ventaId)
        )

        if (importeNumero > ventaSeleccionada.saldo) {
            alert("El abono no puede ser mayor al saldo")
            return
        }

        const nuevoAbono = {
            id: abonos.length + 1,
            ventaId: ventaSeleccionada.id,
            cliente: ventaSeleccionada.cliente,
            importe: importeNumero,
            fecha: new Date().toLocaleDateString()
        }

        setAbonos([...abonos, nuevoAbono])

        setVentas(
            ventas.map(v =>
                v.id === Number(ventaId)
                    ? {
                        ...v,
                        saldo: v.saldo - importeNumero
                    }
                    : v
            )
        )

        setVentaId("")
        setImporte("")
    }

    return (
        <>
            <h1>Abonos</h1>

            <div className="card">
                <div className="card-body">

                    <div className="mb-3">
                        <label className="form-label">
                            Venta
                        </label>

                        <select
                            className="form-select"
                            value={ventaId}
                            onChange={(e) => setVentaId(e.target.value)}
                        >
                            <option value="">
                                Seleccione una venta
                            </option>

                            {ventas.map(venta => (
                                <option
                                    key={venta.id}
                                    value={venta.id}
                                >
                                    {venta.cliente} - $
                                    {Number(venta.saldo).toLocaleString('es-MX')}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Importe
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            value={importe}
                            onChange={(e) => setImporte(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-success" onClick={guardarAbono}>
                        Guardar Abono
                    </button>

                </div>
            </div>
            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Fecha</th>
                        <th>Importe</th>
                    </tr>
                </thead>

                <tbody>
                    {abonos.map(abono => (
                        <tr key={abono.id}>
                            <td>{abono.cliente}</td>
                            <td>{abono.fecha}</td>
                            <td>
                                ${Number(abono.importe).toLocaleString('es-MX', {
                                    minimumFractionDigits: 2
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Abonos