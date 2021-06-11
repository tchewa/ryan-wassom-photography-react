import React from 'react'
import styled from '@emotion/styled'
import Facebook from '../images/facebook-icon.png'
import Instagram from '../images/instagram-icon.png'

const FooterIndex = styled.footer`
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 27%, rgba(0,0,0,0.7525381734725141) 55%, rgba(255,255,255,0) 78%);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  .footer-content {
    a {
      max-width: 40px;
      display: inline-block;
      margin: 0 20px 20px 0;
    }

    img {
      width: 100%;
    }
  }
`

const FooterContainerIndex = () => (
  <FooterIndex>
    <div className="footer-content">
      <a href="/"><img src={Facebook} alt="facebook icon"/></a>
      <a href="/"><img src={Instagram} alt="instagram icon"/></a>
    </div>
  </FooterIndex>
)

export default FooterContainerIndex