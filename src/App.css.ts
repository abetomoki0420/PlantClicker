import { globalStyle, style } from "@vanilla-extract/css"

export const colors = {
  base: "black"
}

globalStyle("html, body", {
  fontFamily: "Meiryo",
  color: colors.base
})

export const appStyle = style({
  margin: "0 auto",
  padding: "0.75rem 1rem"

}, "appStyle")