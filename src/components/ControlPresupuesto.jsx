export default function ControlPresupuesto({presupuesto}) {

    const formatearPresupuesto = (cantidad)=>{
        return cantidad.toLocaleString('en-Us',{
            style: 'currency',
            currency:'USD'
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
            <span>Disponible:</span> {formatearPresupuesto(presupuesto)}
        </p>

        <p>
            <span>Gastado:</span> {formatearPresupuesto(presupuesto)}
        </p>
      </div>
    </div>
  )
}
