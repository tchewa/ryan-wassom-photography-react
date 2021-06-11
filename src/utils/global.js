import React from 'react'
import { Global, css } from '@emotion/core'
export const colors = {
  blue: "#009FE3",
  darkGray: "#353535",
  black: "#000",
  white: "#FFF",
  offwhite: "#dbddda"
}

const BaseStyles = () => (
  <Global
  styles={ css`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

    html, body {
      /* font-family: 'Julius Sans One', sans-serif; */
      font-family: 'Cinzel', serif;
      margin: 0;
      padding: 0;
      background-color: ${colors.white};
      height: 100vh;
    }

    main {
      max-width: 1400px;
      margin: 0 auto;
    }
  `}
  />
)

export default BaseStyles