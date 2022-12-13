import React from 'react'
import { Textfield, DynamicIcon } from 'legion-ui'
import Site from 'components/site'

const PageTextfield = () => {
  return (
    <Site title="Textfield">
      <div className="p-1 flex flex-wrap">
        <div className="w-1/3 p-2">
          <Textfield size="sm" variant="normal" />
          <Textfield size="sm" variant="error" />
          <Textfield size="sm" variant="success" />
          <Textfield size="sm" disabled placeholder="disabled"/>
          <Textfield size="sm" iconLeft={<DynamicIcon name="User" />} />
          <Textfield size="sm" iconRight={<DynamicIcon name="Mail" />} />
          <Textfield size="sm" type="password" iconLeft={<DynamicIcon name="Key" />} iconRight={<DynamicIcon name="Eye" />} />
          <Textfield size="sm" prefixLeft="Rp." />
          <Textfield size="sm" prefixRight="Unit" />
          <Textfield size="sm" prefixLeft="Email" prefixRight="@gmail.com" />
          <Textfield size="sm" label="Label" labelHelp="This is a help tooltip" />
          <Textfield size="sm" variant="error" errorMessage="Error Message" />
          <Textfield size="sm" caption="Caption" captionIcon={<DynamicIcon name="AlertCircle" />}/>
        </div>
        <div className="w-1/3 p-2">
          <Textfield size="md" variant="normal" />
          <Textfield size="md" variant="error" />
          <Textfield size="md" variant="success" />
          <Textfield size="md" disabled placeholder="disabled"/>
          <Textfield size="md" iconLeft={<DynamicIcon name="User" />} />
          <Textfield size="md" iconRight={<DynamicIcon name="Mail" />} />
          <Textfield size="md" type="password" iconLeft={<DynamicIcon name="Key" />} iconRight={<DynamicIcon name="Eye" />} />
          <Textfield size="md" prefixLeft="Rp." />
          <Textfield size="md" prefixRight="Unit" />
          <Textfield size="md" prefixLeft="Email" prefixRight="@gmail.com" />
          <Textfield size="md" label="Label" labelHelp="This is a help tooltip" />
          <Textfield size="md" variant="error" errorMessage="Error Message" />
          <Textfield size="md" caption="Caption" captionIcon={<DynamicIcon name="AlertCircle" />}/>
        </div>
        <div className="w-1/3 p-2">
          <Textfield size="lg" variant="normal" />
          <Textfield size="lg" variant="error" />
          <Textfield size="lg" variant="success" />
          <Textfield size="lg" disabled placeholder="disabled" />
          <Textfield size="lg" iconLeft={<DynamicIcon name="User" />} />
          <Textfield size="lg" iconRight={<DynamicIcon name="Mail" />} />
          <Textfield size="lg" type="password" iconLeft={<DynamicIcon name="Key" />} iconRight={<DynamicIcon name="Eye" />} />
          <Textfield size="lg" prefixLeft="Rp." />
          <Textfield size="lg" prefixRight="Unit" />
          <Textfield size="lg" prefixLeft="Email" prefixRight="@gmail.com" />
          <Textfield size="lg" label="Label" labelHelp="This is a help tooltip" />
          <Textfield size="lg" variant="error" errorMessage="Error Message" />
          <Textfield size="lg" caption="Caption" captionIcon={<DynamicIcon name="AlertCircle" />}/>
        </div>
      </div>
    </Site>
  )
}

export default PageTextfield