import { Prant } from '@/features/prants/components'
import { useSystem } from '@/features/system/hooks'
import { appStyle } from "./App.css"
import { Switcher } from '@/components/Switcher'
import { StatusInfo } from './features/system/components'

function App() { 
  const { prants, seeds, increaseByClass, increasableByClass } = useSystem()

  return (
    <div className={ appStyle }>
      <h1>PrantClicker</h1>
      <StatusInfo seeds={ seeds }/>
      <Switcher>
      {
        prants.map( prant => (
        <div>
          <Prant 
            key={ prant.prantClass }
            prant={ prant }
            disabled={ !increasableByClass(prant.prantClass)}
            incrementable={ () => !!increasableByClass(prant.prantClass)}
            incrementHandler={ () => increaseByClass(prant.prantClass) }
          />
        </div>
        ))
      }
      </Switcher>
    </div>
  )
}

export default App
