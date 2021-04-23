import React from "react"
import styled from "@emotion/styled"
import Logo from "../images/ryanwassomphotoblack.png"

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  a {
    margin: 0 30px;
    font-family: 'Julius Sans One', sans-serif;
    font-size: 25px;
    text-decoration: none;

    &:visited {
      color: black;
    }
  }

  .logo {
    max-width: 300px;
    display: inline;

    img {
      width: 100%;
    }
  }
`

const NavigationContainer = () => {
  return (
    <>
      <Navigation>
        <a href="/gallery">Gallery</a>
        <a href="/" className="logo">
          <img src={Logo} alt="logo"/>
        </a>
        <a href="/about">About</a>
      </Navigation>
    </>
  )
}

export default NavigationContainer