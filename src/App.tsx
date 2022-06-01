import './App.css'
import { useSystem } from '@/features/system/hooks'

function App() { 
  const { prants, seeds, increaseByClass, increasableByClass } = useSystem()

  return (
    <div>
      <div>seeds: {seeds}</div>
      {
        prants.map( prant => {
          return (
            <div key={ prant.prantClass }>
              <div>{ prant.count }</div>
              <div>{ prant.cost }</div>
              <button disabled={ !increasableByClass(prant.prantClass) } onClick={ () => increaseByClass(prant.prantClass)}> Click </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
