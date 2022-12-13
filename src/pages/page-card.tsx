import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Body, Button } from 'legion-ui'
import Site from 'components/site'

const PageCard = () => {
  return (
    <Site title="Card">
      <div className="p-1 flex flex-wrap mb-4">
        <div className="w-1/4 p-2">
          <Card variant="flat">
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Flat Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 p-2">
          <Card variant="flat" isHoverable>
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Flat Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 p-2">
          <Card variant="flat" isPressable >
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Flat Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 p-2">
          <Card variant="flat" isHoverable isPressable>
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Flat Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="p-1 flex flex-wrap mb-4">
        <div className="w-1/4 p-2">
          <Card variant="bordered">
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Bordered Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 p-2">
          <Card variant="bordered" isHoverable>
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Bordered Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 p-2">
          <Card variant="bordered" isPressable >
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Bordered Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 p-2">
          <Card variant="bordered" isHoverable isPressable>
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Bordered Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="p-1 flex flex-wrap mb-4">
        <div className="w-1/4 p-2">
          <Card variant="shadow">
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Shadow Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 p-2">
          <Card variant="shadow" isHoverable>
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Shadow Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 p-2">
          <Card variant="shadow" isPressable >
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Shadow Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 p-2">
          <Card variant="shadow" isHoverable isPressable>
            <CardHeader>
              <Body as="h5" size="lg_bold" color="tertiary800">
                Flat Card
              </Body>
            </CardHeader>
            <CardBody>
              <img src="https://legion.telkom.design/images/apple.png" alt="card variant" />
              <Body as="h6" size="lg_bold" color="tertiary800" mb={1} mt={2}>
                Sub Title
              </Body>
              <Body size="sm_regular" color="tertiary500">
                Some quick example text to build on the card title and content.
              </Body>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button variant="soft">Button</Button>
                <Button variant="solid">Button</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Site>
  )
}

export default PageCard