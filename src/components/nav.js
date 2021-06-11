import React from "react"
import styled from "@emotion/styled"
import Logo from '../images/ryanwassomphotoblack.png'
import {colors} from '../utils/global'


const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;

  a {
    margin: 0 30px;
    font-size: 25px;
    text-decoration: none;
    color: ${colors.black};

    &:hover {
      span {
        &:after {
          width: 100%;
          transition: .2s;
        }
      }
    }

    &:visited {
      color: ${colors.black};
    }

    span {
      &:after {
        content: '';
        max-width: 100px;
        margin: 0 auto;
        width: 0;
        height: 2px;
        background-color: ${colors.black};
        display: block;
        transition: .2s ease-out;
      }
    }
  }

  .logo {
    max-width: 250px;
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
        <a href="/gallery"><span>Gallery</span></a>
        <a href="/" className="logo">
          <img src={Logo} alt="logo"/>
        </a>
        <a href="/about"><span>About</span></a>
      </Navigation>
    </>
  )
}

export default NavigationContainer