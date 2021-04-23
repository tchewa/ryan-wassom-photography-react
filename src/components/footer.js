import React from 'react'
import styled from '@emotion/styled'
import Logo from '../images/ryanwassomphotowhite.png'
import {colors} from '../utils/global'

const Footer = styled.footer`
  background-color: ${colors.darkGray};
  position: absolute;
  bottom: 0;
  width: 100%;
`

const FooterContainer = () => (
  <Footer>
    <div className="footer-content">
      <img src={Logo} alt='logo'/>
    </div>
  </Footer>
)

export default FooterContainer