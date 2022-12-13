import React from 'react'
import { Checkbox } from 'legion-ui'
import Site from 'components/site'

const PageCheckbox = () => {
  return (
    <Site title="Checkbox">
      <div className="p-1 flex flex-wrap">
        <div className="w-1/3 p-2">
          <Checkbox sizeBox="sm" variant="check" label="Check" title="title"/>
          <br />
          <Checkbox sizeBox="sm" variant="indeterminate" label="Indeterminate"/>
          <br />
          <Checkbox sizeBox="sm" disabled label="Disabled"/>
        </div>
        <div className="w-1/3 p-2">
          <Checkbox sizeBox="md" variant="check" label="Check"/>
          <br />
          <Checkbox sizeBox="md" variant="indeterminate" label="Indeterminate"/>
          <br />
          <Checkbox sizeBox="md" disabled label="Disabled"/>
        </div>
        <div className="w-1/3 p-2">
          <Checkbox sizeBox="lg" variant="check" label="Check"/>
          <br />
          <Checkbox sizeBox="lg" variant="indeterminate" label="Indeterminate"/>
          <br />
          <Checkbox sizeBox="lg" disabled label="Disabled"/>
        </div>
      </div>
    </Site>
  )
}

export default PageCheckbox