import { useState, useEffect } from "react"

export default function ControlPresupuesto({ gastos, presupuesto }) {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);

    const totalDisponible = presupuesto-totalGastado

    console.log(totalDisponible);
    setGastado(totalGastado)

    setDisponible(totalDisponible)
  }, [gastos])

  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('en-Us', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>
          Grafica Aqui
        </p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}
        </p>

        <p>
          <span>Disponible:</span> {formatearPresupuesto(disponible)}
        </p>

        <p>
          <span>Gastado:</span> {formatearPresupuesto(gastado)}
        </p>
      </div>
    </div>
  )
}
