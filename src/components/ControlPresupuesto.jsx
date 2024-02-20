import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ControlPresupuesto({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto }) {

  const [porcentanje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);

    const totalDisponible = presupuesto - totalGastado

    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)



    setGastado(totalGastado)

    setDisponible(totalDisponible)

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
  }, [gastos])

  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('en-Us', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar presupuestos y gastos?')

    if (resultado) {
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentanje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: porcentanje > 100 ? '#DC2626' : '#3B82F6'
          })}
          value={porcentanje}
          text={`${porcentanje}% GASTADO`}
        ></CircularProgressbar>
      </div>

      <div className="contenido-presupuesto">
        <button
          className="reset-app"
          type="button"
          onClick={handleResetApp}>
          Resetear
        </button>
        <p>
          <span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible:</span> {formatearPresupuesto(disponible)}
        </p>

        <p>
          <span>Gastado:</span> {formatearPresupuesto(gastado)}
        </p>
      </div>
    </div>
  )
}
