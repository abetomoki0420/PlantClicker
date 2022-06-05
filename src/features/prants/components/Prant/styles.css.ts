import { style } from "@vanilla-extract/css"
import { colors } from "@/App.css"

export const prantStyle = style({
  display: "flex",
  border: `0.275rem solid ${ colors.base }`,
  borderRadius: "0.275rem",
  padding: "0.275rem"
}, "prantStyle")

export const prantDisabledStyle = style([
  prantStyle,
  {
    opacity: "0.4"
  }
])

export const prantLeftStyle = style({
  flexBasis: "1rem"
}, "prantLeftStyle")

export const prantCenterStyle = style({
  flexGrow: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0.5rem"
}, "prantCenterStyle")

export const prantRightStyle = style({
  display: "flex",
  fontSize: "2.5rem",
  fontWeight: "700",
  justifyContent: "center",
  alignItems: "center",
  flexBasis: "1rem"
}, "prantRightStyle")

export const prantImgStyle = style({
  height: "5rem",
  selectors:{
    [`${prantStyle} > &`]: {
      opacity: "0.1"
    }
  }
}, "prantImgStyle")

export const prantNameStyle = style({
  fontSize: "1.75rem",
  fontWeight: "700"
}, "prantNameStyle")

export const prantCostStyle = style({

}, "prantCostStyle")
