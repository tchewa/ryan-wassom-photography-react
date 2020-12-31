import React from 'react'
import BaseStyles from '../utils/global'

const Layout = ({ children }) => (
  <>
    <BaseStyles/>
    <main>{children}</main>
  </>
)

export default Layout