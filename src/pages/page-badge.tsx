import React from 'react'
import { Badge } from 'legion-ui'
import Site from 'components/site'

const PageBadge= () => {
  return (
    <Site title="Badge">
      <div className="p-1 flex flex-wrap">
        <div className="w-1/3 p-2">
          <Badge size="small" variant="primary">Primary</Badge>
          <br /><br />
          <Badge size="small" variant="secondary">Secondary</Badge>
          <br /><br />
          <Badge size="small" variant="info">Info</Badge>
          <br /><br />
          <Badge size="small" variant="warning">Warning</Badge>
          <br /><br />
          <Badge size="small" variant="success">Success</Badge>
          <br /><br />
          <Badge size="small" variant="error">Error</Badge>
          <br /><br />
        </div>
        <div className="w-1/3 p-2">
          <Badge size="large" variant="primary">Primary</Badge>
          <br /><br />
          <Badge size="large" variant="secondary">Secondary</Badge>
          <br /><br />
          <Badge size="large" variant="info">Info</Badge>
          <br /><br />
          <Badge size="large" variant="warning">Warning</Badge>
          <br /><br />
          <Badge size="large" variant="success">Success</Badge>
          <br /><br />
          <Badge size="large" variant="error">Error</Badge>
        </div>
      </div>
    </Site>
  )
}

export default PageBadge