import { globalStyle, style } from "@vanilla-extract/css"

export const switcherStyle = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
}, "switcherStyle")


globalStyle(`${switcherStyle} > *`, {
  flexGrow: "1",
  flexBasis: "calc( (80rem - 100%) * 999 )",
})