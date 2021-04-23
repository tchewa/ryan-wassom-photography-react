import React from 'react'
import BaseStyles from '../utils/global'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <Header/>
    <BaseStyles/>
    <main>{children}</main>
    <Footer/>
  </>
)

export default Layout