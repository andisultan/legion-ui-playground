import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Button, DynamicIcon, Avatar, Badge } from 'legion-ui'
import { MENU }from 'config/route'

interface SiteProps {
  children: React.ReactNode;
  title: string;
}

const Site: FC<SiteProps> = ({ children, title }) => {
  const [openNotification, setOpenNotification] = useState(false)
  const toggleNotification = () => setOpenNotification(prev => !prev)
  const closeNotification = () => setOpenNotification(false)

  const [openProfileMenu, setOpenProfileMenu] = useState(false)
  const toggleProfileMenu = () => setOpenProfileMenu(prev => !prev)
  const closeProfileMenu = () => setOpenProfileMenu(false)

  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <aside className="min-h-screen border-r border-gray-200 w-56">
          <h3 className="text-3xl p-4">Dashboard</h3>
          <ul className="list-none m-0 mt-4 p-0">
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_DASHBOARD}>Dashboard</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_ACCORDION}>Accordion</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_ANCHOR}>Anchor</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_AVATAR}>Avatar</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_BADGE}>Badge</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_BUTTON}>Button</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_CARD}>Card</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_CHECKBOX}>Checkbox</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_DIVIDER}>Divider</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_DROPDOWN}>Dropdown</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_SNACKBAR}>Snackbar</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_SELECT}>Select</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_SPINNER}>Spinner</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_SWITCH}>Switch</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_TABLE}>Table</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_TEXTAREA}>Textarea</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_TEXTFIELD}>Textfield</Link></li>
            <li><Link className="w-full py-2 px-4 block" to={MENU.PAGE_TOOLTIP}>Tooltip</Link></li>
          </ul>
      </aside>
      <main className="flex-1 min-h-screen">
        <header className="flex flex-wrap justify-between items-center px-6 border-b border-gray-200">
            <h1 className="text-xl">{title}</h1>
            <div>
              <Dropdown 
                trigger={
                  <Button variant="transparent" onClick={toggleNotification}>
                    <span className="flex">
                      <DynamicIcon name="Bell" />
                      <Badge variant="info">2</Badge>
                    </span>
                  </Button>
                }
                onClose={closeNotification}
                isOpen={openNotification}
                borderRadius={8}
                position="right"
              >
                <span className="block p-1"><Badge variant="error" /> Notification Lorem ipsum</span>
                <span className="block p-1"><Badge variant="error" /> Notification Lorem ipsum</span>
                <span className="block p-1"><Badge variant="error" /> Notification Lorem ipsum</span>
                <span className="block p-1"><Badge variant="success" /> Notification Lorem ipsum</span>
                <span className="block p-1"><Badge variant="success" /> Notification Lorem ipsum</span>
              </Dropdown>
            
              <Dropdown 
                trigger={
                  <Button iconRight={<DynamicIcon name="ChevronDown" />} variant="transparent" onClick={toggleProfileMenu}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#444', }}>
                      <Avatar size="small" src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />
                      <span style={{ paddingLeft: '10px', textAlign: 'left', lineHeight: '1.3'}}>
                        <span style={{ display: 'block', fontSize: '14px'}}>Alwan Thio</span>
                        <span style={{ fontWeight: 'normal' }}>Administrator</span>
                      </span>
                    </span>
                  </Button>
                }
                onClose={closeProfileMenu}
                isOpen={openProfileMenu}
                borderRadius={8}
                position="right"
              >
                <Link className="flex items-center p-1" to={MENU.PAGE_DASHBOARD}>
                  <DynamicIcon name="User" size="16" />
                  <span className="ml-1">Profile</span>
                </Link>
                <Link className="flex items-center p-1" to={MENU.PAGE_DASHBOARD}>
                  <DynamicIcon name="Settings" size="16" />
                  <span className="ml-1">Settings</span>
                </Link>
                <Link className="flex items-center p-1" to={MENU.PAGE_DASHBOARD}>
                  <DynamicIcon name="LogOut" size="16" />
                  <span className="ml-1">Sign Out</span>
                </Link>
              </Dropdown>
            </div>
        </header>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Site