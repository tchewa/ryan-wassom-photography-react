import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// markup
const IndexPage = () => {
  return (
    <Container>
      <p>this is the home page</p>
    </Container>
  );
}

export default IndexPage
