import React from 'react'
import { Global, css } from '@emotion/core'
export const colors = {
  blue: "#009FE3",
  darkGray: "#353535",
}

const BaseStyles = () => (
  <Global
  styles={ css`
  @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
    html, body {
      /* font-family: 'Julius Sans One', sans-serif; */
      font-family: 'Open Sans', sans-serif;
      margin: 0;
      padding: 0;
    }

    main {
      max-width: 1200px;
      border: 3px solid red;
      margin: 0 auto;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;

      img {
        max-width: 200px;
      }
    }
  `}
  />
)

export default BaseStyles