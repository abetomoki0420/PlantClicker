import { FC } from "react";
import { statusInfoStyle, seedsStyle } from "./styles.css"

type Props = {
  seeds: number
}

export const StatusInfo: FC<Props> = ({seeds}) => {
  return (
    <div className={ statusInfoStyle }>
      <div className={ seedsStyle }>
        <span>Seeds:</span>{ seeds }
      </div>
    </div>
  )
}