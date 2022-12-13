import React from 'react'
import Site from 'components/site'
import { Button, DynamicIcon } from 'legion-ui';

const ButtonPage = () => {
  return (
    <Site title="Button">
      <div className="p-1 flex flex-wrap items-center justify-between">
        <Button size="sm">Small Button</Button>
        <Button size="md">Medium Button</Button>
        <Button size="lg">Large Button</Button>
      </div>
      <div className="p-1 flex flex-wrap items-center justify-between">
        <Button size="sm" variant="outline">Small Button</Button>
        <Button size="md" variant="outline">Medium Button</Button>
        <Button size="lg" variant="outline">Large Button</Button>
      </div>
      <div className="p-1 flex flex-wrap items-center justify-between">
        <Button size="sm" variant="soft">Small Soft Button</Button>
        <Button size="md" variant="soft">Medium Soft Button</Button>
        <Button size="lg" variant="soft">Large Soft Button</Button>
      </div>
      <div className="p-1 flex flex-wrap items-center justify-between">
        <Button size="sm" variant="transparent">Small Transparent Button</Button>
        <Button size="md" variant="transparent">Medium Transparent Button</Button>
        <Button size="lg" variant="transparent">Large Transparent Button</Button>
      </div>
      <div className="p-1 flex flex-wrap items-center justify-between">
        <Button size="sm" disabled>Small Disabled Button</Button>
        <Button size="md" disabled>Medium Disabled Button</Button>
        <Button size="lg" disabled>Large Disabled Button</Button>
      </div>
      <div className="p-1 flex flex-wrap items-center justify-between">
        <Button size="sm" iconLeft={<DynamicIcon name="ArrowLeft" />}>Small Button</Button>
        <Button size="md" iconLeft={<DynamicIcon name="ArrowLeft" />}>Medium Button</Button>
        <Button size="lg" iconLeft={<DynamicIcon name="ArrowLeft" />}>Large Button</Button>
      </div>
      <div className="p-1 flex flex-wrap items-center justify-between">
        <Button size="sm" iconRight={<DynamicIcon name="ArrowRight" />}>Small Button</Button>
        <Button size="md" iconRight={<DynamicIcon name="ArrowRight" />}>Medium Button</Button>
        <Button size="lg" iconRight={<DynamicIcon name="ArrowRight" />}>Large Button</Button>
      </div>
      <div className="p-1 flex flex-wrap items-center justify-between">
        <Button size="sm" iconLeft={<DynamicIcon name="ArrowLeft" />} iconRight={<DynamicIcon name="ArrowRight" />}>
          Small Button
        </Button>
        <Button size="md" iconLeft={<DynamicIcon name="ArrowLeft" />} iconRight={<DynamicIcon name="ArrowRight" />}>
          Medium Button
        </Button>
        <Button size="lg" iconLeft={<DynamicIcon name="ArrowLeft" />} iconRight={<DynamicIcon name="ArrowRight" />}>
          Large Button
        </Button>
      </div>
    </Site>
  )
}

export default ButtonPage