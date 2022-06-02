import { FC } from "react"
import type * as types from "../types"

type Props = {
  prant: types.Prant
  disabled?: boolean
  incrementHandler: () => void;
}

export const Prant: FC<Props> = (props) => {
  return (
    <div>
      <div>{props.prant.prantClass}</div>
      <div>{ props.prant.count }</div>
      <button disabled={ props.disabled} onClick={ () => props.incrementHandler() }>click</button>
    </div>
  )
}

Prant.defaultProps = {
  disabled: true
}