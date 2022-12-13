import React from 'react'
import { Divider, Body, Caption } from 'legion-ui'
import Site from 'components/site'

const PageDivider = () => {
  return (
    <Site title="Divider">
      <Divider />
      <br />
      <br />
      <br />
      <Body variant="lg_bold">Legion UI</Body>
      <Divider />
      <Caption size="lg_regular">Design System of Telkom Indonesia</Caption>
    </Site>
  )
}

export default PageDivider