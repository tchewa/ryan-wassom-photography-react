import React from 'react'
import { Global, css } from '@emotion/react'

export const colors = {
  blue: "#009FE3",
}

const BaseStyles = () => (
  <Global
  styles={ css`
    html, body {
      max-width: 1200px;
      border: 3px solid red;
      margin: 0 auto;
    }
  `}
  />
)

export default BaseStyles