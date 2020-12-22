import * as React from "react"
import { StyledProps, styled, css } from "../styles/stitches"

type PropsT = StyledProps & {}

export const Paragraph: React.FC<PropsT> = styled("p", {
  color: "var(--color-black)",
  fontSize: "1.6rem",
  letterSpacing: 0.5
})

export const H1: React.FC<PropsT> = styled("h1", {
  color: "var(--color-black)",
  fontSize: "$6"
})

export const H2: React.FC<PropsT> = styled("h1", {
  color: "var(--color-black)",
  fontSize: "$5"
})

export const H3: React.FC<PropsT> = styled("h1", {
  color: "var(--color-black)",
  fontSize: "$4"
})

export const H4: React.FC<PropsT> = styled("h1", {
  color: "var(--color-black)",
  fontSize: "$3"
})

export const H5: React.FC<PropsT> = styled("h1", {
  color: "var(--color-black)",
  fontSize: "$2"
})
