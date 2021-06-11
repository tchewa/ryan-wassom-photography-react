import React from 'react'
import LayoutIndex from '../components/layoutIndex'
import styled from '@emotion/styled'
import Background1 from '../background-images/road2.jpg'


const BackgroundImage = styled.div`
  background-image: url(${Background1});
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

// markup
const IndexPage = () => {
  return (
    <BackgroundImage>
      <LayoutIndex/>
    </BackgroundImage>
  );
}

export default IndexPage
