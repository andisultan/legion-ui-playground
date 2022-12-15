import React from 'react'
import Site from 'components/site'
import { Select, DynamicIcon } from 'legion-ui'

const PageSelect = () => {
  return (
    <Site title="Select">
      <div className="flex">
        <div className="w-1/3 p-2">
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Label"
            variant="normal"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Error"
            variant="error"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Success"
            variant="success"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Default Value"
            defaultValue={{ value: 'strawberry', label: 'Strawberry' }}
            variant="normal"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Multi Select"
            variant="normal"
            placeholder="Choose"
            isMulti
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Multi Select and unhide list"
            variant="normal"
            placeholder="Choose"
            hideSelectedOptions={false}
            isMulti
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Icon Left"
            placeholder="Choose"
            iconLeft={<DynamicIcon name="Search" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Caption"
            placeholder="Choose"
            caption="Pilih variant"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Caption and Icon"
            placeholder="Choose"
            caption="Pilih variant"
            captionIcon={<DynamicIcon name="Info" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Caption Variant Error"
            variant="error"
            placeholder="Choose"
            caption="Pilih variant"
            captionIcon={<DynamicIcon name="Info" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Caption Variant Success"
            variant="success"
            placeholder="Choose"
            caption="Pilih variant"
            captionIcon={<DynamicIcon name="Check" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Hint"
            placeholder="Choose"
            hint="Text hint"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="sm"
            label="Disabled"
            placeholder="Choose"
            isDisabled
          />
        </div>
        <div className="w-1/3 p-2">
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Label"
            variant="normal"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Error"
            variant="error"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Success"
            variant="success"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Default Value"
            defaultValue={{ value: 'strawberry', label: 'Strawberry' }}
            variant="normal"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Multi Select"
            variant="normal"
            placeholder="Choose"
            isMulti
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Multi Select and unhide list"
            variant="normal"
            placeholder="Choose"
            hideSelectedOptions={false}
            isMulti
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Icon Left"
            placeholder="Choose"
            iconLeft={<DynamicIcon name="Search" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Caption"
            placeholder="Choose"
            caption="Pilih variant"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Caption and Icon"
            placeholder="Choose"
            caption="Pilih variant"
            captionIcon={<DynamicIcon name="Info" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Caption Variant Error"
            variant="error"
            placeholder="Choose"
            caption="Pilih variant"
            captionIcon={<DynamicIcon name="Info" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Caption Variant Success"
            variant="success"
            placeholder="Choose"
            caption="Pilih variant"
            captionIcon={<DynamicIcon name="Check" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Hint"
            placeholder="Choose"
            hint="Text hint"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="md"
            label="Disabled"
            placeholder="Choose"
            isDisabled
          />
        </div>
        <div className="w-1/3 p-2">
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Label"
            variant="normal"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Error"
            variant="error"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Success"
            variant="success"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Default Value"
            defaultValue={{ value: 'strawberry', label: 'Strawberry' }}
            variant="normal"
            placeholder="Choose"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Multi Select"
            variant="normal"
            placeholder="Choose"
            isMulti
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Multi Select and unhide list"
            variant="normal"
            placeholder="Choose"
            hideSelectedOptions={false}
            isMulti
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Icon Left"
            placeholder="Choose"
            iconLeft={<DynamicIcon name="Search" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Caption"
            placeholder="Choose"
            caption="Pilih variant"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Caption and Icon"
            placeholder="Choose"
            caption="Pilih variant"
            captionIcon={<DynamicIcon name="Info" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Caption Variant Error"
            variant="error"
            placeholder="Choose"
            caption="Pilih variant"
            captionIcon={<DynamicIcon name="Info" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Caption Variant Success"
            variant="success"
            placeholder="Choose"
            caption="Pilih variant"
            captionIcon={<DynamicIcon name="Check" />}
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Hint"
            placeholder="Choose"
            hint="Text hint"
          />
          <br />
          <Select
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            size="lg"
            label="Disabled"
            placeholder="Choose"
            isDisabled
          />
        </div>
      </div>
    </Site>
  )
}

export default PageSelect