import React from "react"
import styled from "@emotion/styled"
import Logo from '../images/ryanwassomphotowhite.png'
import {colors} from '../utils/global'


const NavigationIndex = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 36%, rgba(0,0,0,0.7525381734725141) 67%, rgba(255,255,255,0) 100%);
  height: 120px;

  a {
    margin: 0 30px;
    font-size: 25px;
    text-decoration: none;
    color: ${colors.white};

    &:hover {
      span {
        &:after {
          width: 100%;
          transition: .2s;
        }
      }
    }

    &:visited {
      color: ${colors.white};
    }

    span {
      &:after {
        content: '';
        max-width: 100px;
        margin: 0 auto;
        width: 0;
        height: 2px;
        background-color: white;
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

const NavigationContainerIndex = () => {
  return (
    <>
      <NavigationIndex>
        <a href="/gallery"><span>Gallery</span></a>
        <a href="/" className="logo">
          <img src={Logo} alt="logo"/>
        </a>
        <a href="/about"><span>About</span></a>
      </NavigationIndex>
    </>
  )
}

export default NavigationContainerIndex