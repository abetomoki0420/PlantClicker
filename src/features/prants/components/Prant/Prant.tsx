import { FC } from "react"
import { PRANT_IMG } from "../../constraints"
import type * as types from "../../types"
import { prantStyle, prantDisabledStyle, prantImgStyle, prantLeftStyle, prantCenterStyle, prantRightStyle, prantNameStyle } from "./styles.css"

type Props = {
  prant: types.Prant
  disabled?: boolean
  incrementable: () => boolean;
  incrementHandler: () => void;
}

export const Prant: FC<Props> = (props) => {
  const increment = () => {
    if(!props.incrementable()){
      return;
    }
    props.incrementHandler() 
  }

  return (
    <div className={ props.incrementable() ? prantStyle  : prantDisabledStyle }  onClick={ () => increment() }>
      <div className={ prantLeftStyle}>
        <PrantImg prant={ props.prant } />
      </div> 
      <div className={ prantCenterStyle}>
        <div className={ prantNameStyle }>{ props.prant.prantClass }</div>
        <div>
          <span>cost:</span>{ props.prant.cost }</div>
      </div>
      <div className={ prantRightStyle}>
        <div>{props.prant.count}</div>
      </div>
    </div>
  )
}

Prant.defaultProps = {
  disabled: true
}

type ImgProps = {
  prant: types.Prant
}

export const PrantImg: FC<ImgProps> = (props) => {
  return (
    <img className={prantImgStyle} src={ PRANT_IMG[props.prant.prantClass] }/>
  )
}