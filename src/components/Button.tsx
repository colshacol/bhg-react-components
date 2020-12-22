import * as React from "react"
import { StyledProps, styled, css } from "../styles/stitches"

export const Button = styled("button", {
  fontFamily: "var(--main-font)",
  appearance: "none",
  color: "var(--color-white)",
  backgroundColor: "var(--color-primary)",
  lineHeight: "5rem",
  fontSize: "1.6rem",
  border: "none",
  borderRadius: "0.4rem",
  outline: "none",
  padding: "0 2rem",
  cursor: "pointer",
  whiteSpace: "nowrap",
  userSelect: "none",

  ":hover": {
    boxShadow: "0 5px 15px rgba(0, 0, 0, .12)"
  },

  "&[disabled]": {
    color: "rgba(255, 255, 255, 0.4)",
    backgroundColor: "var(--color-lite-grey)",
    pointerEvents: "none",
    userSelect: "none"
  },

  variants: {
    isRipple: {
      true: {
        animation: ""
      }
    },

    isDisabled: {
      true: {}
    },

    variant: {
      primary: {
        backgroundColor: "var(--color-green)"
      },

      warning: {
        backgroundColor: "var(--color-red)"
      },

      secondary: {
        backgroundColor: "var(--color-green)"
      }
    }
  }
})
