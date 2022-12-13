import React from 'react'
import Site from 'components/site'
import { Textfield } from 'legion-ui';

const PageCard = () => {
  return (
    <Site title="Card">
        <h1 className="text-4xl mb-8"><strong>Input</strong></h1>

        <div className="flex justify-between">
          <div className="flex-1 px-3">
            <h2 className="text-2xl mb-8">Small</h2>
            <Textfield size="sm" label="Normal"/>
            <Textfield size="sm" variant="error" label="Error" />
            <Textfield size="sm" variant="success"  label="Success"/>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-2xl mb-8">Medium</h2>
            <Textfield size="md" />
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-2xl mb-8">Large</h2>
            <Textfield size="lg" />
          </div>
        </div>
    </Site>
  )
}

export default PageCard