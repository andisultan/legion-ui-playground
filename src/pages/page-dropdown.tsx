import React, { useState } from 'react'
import { Dropdown, Button, DynamicIcon, Anchor, Checkbox, Avatar } from 'legion-ui'
import Site from 'components/site'

const PageDropdown = () => {
  const [openOne, setOpenOne] = useState(false)
  const toggleOne = () => setOpenOne( prev => !prev)
  const closeOne = () => setOpenOne(false)

  const [openTwo, setOpenTwo] = useState(false)
  const toggleTwo = () => setOpenTwo( prev => !prev)
  const closeTwo = () => setOpenTwo(false)

  const [openThree, setOpenThree] = useState(false)
  const toggleThree = () => setOpenThree( prev => !prev)
  const closeThree = () => setOpenThree(false)

  const categories = ['Automative', 'Electronics', 'Fashion', 'Furniture', 'Sport & Travel']
  const provinces = ['Jawa', 'Kalimantan', 'Sumatera', 'Aceh', 'Papua']

  const [openFour, setOpenFour] = useState(false)
  const toggleFour = () => setOpenFour( prev => !prev)
  const closeFour = () => setOpenFour(false)
  const [selectedFour, setSelecdtedFour] = useState<string[]>([])
  const clearSelectedFour = () => setSelecdtedFour([])
  const isCheckedFour = (value: string) => selectedFour.includes(value);
  const selectProvinceFour = (e: React.ChangeEvent<HTMLInputElement>) => setSelecdtedFour([...selectedFour, e.target.value])

  const [openFive, setOpenFive] = useState(false)
  const toggleFive = () => setOpenFive( prev => !prev)
  const closeFive = () => setOpenFive(false)
  const [selectedFive, setSelecdtedFive] = useState<string[]>([])
  const clearSelectedFive = () => setSelecdtedFive([])
  const isCheckedFive = (value: string) => selectedFive.includes(value);
  const selectProvinceFive = (e: React.ChangeEvent<HTMLInputElement>) => setSelecdtedFive([...selectedFive, e.target.value])

  const [openSix, setOpenSix] = useState(false)
  const toggleSix = () => setOpenSix( prev => !prev)
  const closeSix = () => setOpenSix(false)

  return (
    <Site title="Dropdown">
      <div className="flex flex-wrap">
        <div className="w-1/3 mb-6">
          <Dropdown
            trigger={<Button onClick={toggleOne} iconRight={<DynamicIcon name="ChevronDown" />}>Select</Button>}
            onClose={closeOne}
            isOpen={openOne}
            borderRadius={8}
          >
            <div className="flex flex-col flex-wrap">
              <Anchor className="py-1 px-2">New File</Anchor>
              <Anchor className="py-1 px-2">View Detail</Anchor>
              <Anchor className="py-1 px-2">Edit File</Anchor>
              <Anchor className="py-1 px-2">Save to Favorite</Anchor>
              <Anchor className="py-1 px-2">Delete File</Anchor>
            </div>
          </Dropdown>
        </div>
        <div className="w-1/3 mb-6">
          <Dropdown
              trigger={<Button onClick={toggleTwo} iconRight={<DynamicIcon name="ChevronDown" />}>Select</Button>}
              onClose={closeTwo}
              isOpen={openTwo}
              borderRadius={8}
            >
              <div className="flex flex-col flex-wrap">
                <Anchor className="py-1 px-2" iconLeft={<DynamicIcon name="FilePlus" />}>New File</Anchor>
                <Anchor className="py-1 px-2" iconLeft={<DynamicIcon name="Eye" />}>View Detail</Anchor>
                <Anchor className="py-1 px-2" iconLeft={<DynamicIcon name="Edit" />}>Edit File</Anchor>
                <Anchor className="py-1 px-2" iconLeft={<DynamicIcon name="Star" />}>Save to Favorite</Anchor>
                <Anchor className="py-1 px-2" iconLeft={<DynamicIcon name="Trash2" />}>Delete File</Anchor>
              </div>
          </Dropdown>
        </div>
        <div className="w-1/3 mb-6">
          <Dropdown
            trigger={<Button onClick={toggleThree} iconRight={<DynamicIcon name="ChevronDown" />}>Select</Button>}
            onClose={closeThree}
            isOpen={openThree}
            borderRadius={8}
          >
            <div className="flex flex-col flex-wrap">
              <Anchor className="py-2 px-2" iconLeft={<DynamicIcon name="FilePlus" />}>
                <span className="flex flex-col leading-5 ml-2">
                  New File<small>Add your new file to draft</small>
                </span>
              </Anchor>
              <Anchor className="py-2 px-2" iconLeft={<DynamicIcon name="Eye" />}>
                <span className="flex flex-col leading-5 ml-2">
                  View Detail<small>See your detail file in draft</small>
                </span>
              </Anchor>
              <Anchor className="py-2 px-2" iconLeft={<DynamicIcon name="Edit" />}>
                <span className="flex flex-col leading-5 ml-2">
                  Edit File<small>Continue edit your file</small>
                </span>
              </Anchor>
              <Anchor className="py-2 px-2" iconLeft={<DynamicIcon name="Star" />}>
                <span className="flex flex-col leading-5 ml-2">
                  Save to Favorite<small>Add selected  file to favorite</small>
                </span>
              </Anchor>
            </div>
            <Anchor className="py-2 px-2" iconLeft={<DynamicIcon name="Trash2" />}>
              <span className="flex flex-col leading-5 ml-2">
                Delete File<small>Remove selected file to trash</small>
              </span>
            </Anchor>
          </Dropdown>
        </div>
        <div className="w-1/3 mb-6">
          <Dropdown 
            trigger={<Button onClick={toggleFour} iconRight={<DynamicIcon name="ChevronDown" />}>Filter</Button>}
            onClose={closeFour}
            isOpen={openFour}
            borderRadius={8}
          >
            <div className="flex flex-col flex-wrap">
              {provinces.map( province => 
                <div className="py-1 px-2" key={province}>
                  <Checkbox value={province} label={province} onChange={selectProvinceFour} checked={isCheckedFour(province)}/>
                </div>
              )}
            </div>
            <div className="flex justify-between mt-4 px-2">
              <Button variant='outline' onClick={clearSelectedFour}>Clear</Button>
              <Button style={{marginLeft: '10px'}} onClick={closeFour}>Submit</Button>
            </div>
          </Dropdown>
        </div>
        <div className="w-1/3 mb-6">
          <Dropdown 
            trigger={<Button onClick={toggleFive} iconRight={<DynamicIcon name="ChevronDown" />}>Filter</Button>}
            onClose={closeFive}
            isOpen={openFive}
            borderRadius={8}
            position='center'
          >
            <div className="flex whitespace-nowrap min-w-fit">
              <div className="w-1/2">
                <h3 className="p-2 text-lg">Category</h3>
                {categories.map( category => 
                  <div className="py-1 px-2" key={category}>
                    <Checkbox key={category} value={category} label={category} onChange={selectProvinceFive} checked={isCheckedFive(category)}/>
                  </div>
                )}
              </div>
              <div className="w-1/2">
                  <h3 className="p-2 text-lg">Region</h3>
                  {provinces.map( province => 
                    <div className="py-1 px-2" key={province}>
                      <Checkbox value={province} label={province} onChange={selectProvinceFive} checked={isCheckedFive(province)}/>
                    </div>
                  )}
              </div>
            </div>
            <div className="flex justify-between mt-4 px-2">
              <Button variant='outline' onClick={clearSelectedFive}>Clear</Button>
              <Button style={{marginLeft: '10px'}} onClick={closeFive}>Submit</Button>
            </div>
          </Dropdown>
        </div>
        <div className="w-1/3 mb-6">
          <Dropdown 
            trigger={
              <Button iconRight={<DynamicIcon name="ChevronDown" />} variant="transparent" onClick={toggleSix}>
                <span className="flex items-center">
                  <Avatar size="medium" src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />
                  <span className="flex flex-col text-left text-base ml-2">
                    <span className="example-menu-name">Alwan Thio</span>
                    <span className="text-xs">Administrator</span>
                  </span>
                </span>
              </Button>
            }
            onClose={closeSix}
            isOpen={openSix}
            borderRadius={8}
            position='center'
          >
            <div className="flex flex-col">
              <Anchor className="py-1 px-2" iconLeft={<DynamicIcon name="User" />}>Profile</Anchor>
              <Anchor className="py-1 px-2" iconLeft={<DynamicIcon name="Settings" />}>Settings</Anchor>
              <Anchor className="py-1 px-2" iconLeft={<DynamicIcon name="Edit" />}>Edit Info</Anchor>
              <Anchor className="py-1 px-2" iconLeft={<DynamicIcon name="LogOut" />}>Sign Out</Anchor>
            </div>
          </Dropdown>
        </div>
      </div>
    </Site>
  )
}

export default PageDropdown