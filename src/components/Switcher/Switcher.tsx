import { FC, ReactNode } from "react"
import { switcherStyle } from "./styles.css"

type Props = {
  children: ReactNode[]
}

export const Switcher: FC<Props> = ({children}) => {
  return (
    <div className={ switcherStyle }>
      { children }
    </div>
  )
}