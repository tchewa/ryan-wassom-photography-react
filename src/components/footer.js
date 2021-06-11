import React from 'react'
import styled from '@emotion/styled'
import Facebook from '../images/facebook-icon-black.png'
import Instagram from '../images/instagram-icon-black.png'

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    position: relative;
    height: auto;
  }

  .footer-content {
    a {
      max-width: 40px;
      display: inline-block;
      margin: 0 20px 10px 0;
    }

    img {
      width: 100%;
    }
  }
`

const FooterContainer = () => (
  <Footer>
    <div className="footer-content">
      <a href="/"><img src={Facebook} alt="facebook icon"/></a>
      <a href="/"><img src={Instagram} alt="instagram icon"/></a>
    </div>
  </Footer>
)

export default FooterContainer