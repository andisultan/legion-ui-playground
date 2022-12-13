import React from 'react'
import { Anchor, DynamicIcon } from 'legion-ui'
import Site from 'components/site'

const PageAnchort = () => {
  return (
    <Site title="Anchor">
      <div className="p-1 flex flex-wrap">
        <div className="w-1/3 p-2">
          <Anchor size="sm">Anchor Text</Anchor>
          <br/>
          <Anchor size="sm" iconLeft={<DynamicIcon name="ExternalLink" />}>Anchor Text</Anchor>
          <br/>
          <Anchor size="sm" iconLeft={<DynamicIcon name="ExternalLink" />} iconRight={<DynamicIcon name="ExternalLink" />}>Anchor Text</Anchor>
          <br/>
          <Anchor size="sm" disabledAnchor>Anchor Disabled</Anchor>
        </div>
        <div className="w-1/3 p-2">
          <Anchor size="md">Anchor Text</Anchor>
          <br/>
          <Anchor size="md" iconLeft={<DynamicIcon name="ExternalLink" />}>Anchor Text</Anchor>
          <br/>
          <Anchor size="md" iconLeft={<DynamicIcon name="ExternalLink" />} iconRight={<DynamicIcon name="ExternalLink" />}>Anchor Text</Anchor>
          <br/>
          <Anchor size="md" disabledAnchor>Anchor Disabled</Anchor>
        </div>
        <div className="w-1/3 p-2">
          <Anchor size="lg">Anchor Text</Anchor>
          <br/>
          <Anchor size="lg" iconLeft={<DynamicIcon name="ExternalLink" />}>Anchor Text</Anchor>
          <br/>
          <Anchor size="lg" iconLeft={<DynamicIcon name="ExternalLink" />} iconRight={<DynamicIcon name="ExternalLink" />}>Anchor Text</Anchor>
          <br/>
          <Anchor size="lg" disabledAnchor>Anchor Disabled</Anchor>
        </div>
      </div>
    </Site>
  )
}

export default PageAnchort