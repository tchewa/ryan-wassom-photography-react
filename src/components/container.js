import React from 'react'
import styled from "@emotion/styled"

const Constraint = styled.div`
  max-width: 1400px;
  margin-top: 40px;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`

const Container = ({ children }) => {
  return (
    <>
      <Constraint>
        {children}
      </Constraint>
    </>
  )
}

export default Container