import React from 'react'
import BaseStyles from '../utils/global'
import HeaderIndex from './headerIndex'
import FooterIndex from './footerIndex'

const LayoutIndex = ({ children }) => (
  <>
    <HeaderIndex/>
    <BaseStyles/>
    <main>{children}</main>
    <FooterIndex/>
  </>
)

export default LayoutIndex