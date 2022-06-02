import { Prant } from '@/features/prants/components'
import { useSystem } from '@/features/system/hooks'

function App() { 
  const { prants, seeds, increaseByClass, increasableByClass } = useSystem()

  return (
    <div>
      <div>{ seeds }</div>
      {
        prants.map( prant => 
        <Prant 
          prant={ prant }
          disabled={ !increasableByClass(prant.prantClass)}
          incrementHandler={ () => increaseByClass(prant.prantClass) }
        />)
      }
    </div>
  )
}

export default App
