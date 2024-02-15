import Gasto from "./Gasto"

export default function ListadoGastos({gastos}) {

  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos': 'No hay gastos aun'}</h2>

      {gastos.map(gasto=>(<Gasto key={gasto.id} gasto={gasto}/>))}
    </div>
  )
}