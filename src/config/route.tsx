import React, { Suspense } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

// Menus
export const MENU = {
    PAGE_HOME: '/',
    PAGE_DASHBOARD: '/dashboard',
    PAGE_ANCHOR: '/anchor',
    PAGE_AVATAR: '/avatar',
    PAGE_BADGE: '/badge',
    PAGE_BUTTON: '/button',
    PAGE_CARD: '/card',
    PAGE_CHECKBOX: '/checkbox',
    PAGE_DIVIDER: '/divider',
    PAGE_DROPDOWN: '/dropdown',
    PAGE_SNACKBAR: '/snackbar',
    PAGE_SELECT: '/select',
    PAGE_SPINNER: '/spinner',
    PAGE_SWITCH: '/switch',
    PAGE_TABLE: '/table',
    PAGE_TEXTAREA: '/textarea',
    PAGE_TEXTFIELD: '/textfield',
    PAGE_TOOLTIP: '/tooltip',
}

// Pages
const Home = React.lazy(() => import('pages/home'))
const PageDashboard = React.lazy(() => import('pages/page-dashboard'))
const PageAnchor = React.lazy(() => import('pages/page-anchor'))
const PageAvatar = React.lazy(() => import('pages/page-avatar'))
const PageBadge = React.lazy(() => import('pages/page-badge'))
const PageButton = React.lazy(() => import('pages/page-button'))
const PageCard = React.lazy(() => import('pages/page-card'))
const PageCheckbox = React.lazy(() => import('pages/page-checkbox'))
const PageDivider = React.lazy(() => import('pages/page-divider'))
const PageDropdown = React.lazy(() => import('pages/page-dropdown'))
const PageSnackbar = React.lazy(() => import('pages/page-snackbar'))
const PageSelect = React.lazy(() => import('pages/page-select'))
const PageSpinner = React.lazy(() => import('pages/page-spinner'))
const PageSwitch = React.lazy(() => import('pages/page-switch'))
const PageTable = React.lazy(() => import('pages/page-table'))
const PageTextarea = React.lazy(() => import('pages/page-textarea'))
const PageTextfield = React.lazy(() => import('pages/page-textfield'))
const PageTooltip = React.lazy(() => import('pages/page-tooltip'))

const LoadingComponent = (
    <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', minWidth: '100vw'}}>
        <p>Loading...</p>
    </div>
)

export const AppRoute = () => (
  <Suspense fallback={LoadingComponent}>
    <BrowserRouter>
      <Routes>
        <Route path={MENU.PAGE_HOME} element={<Home />} />
        <Route path={MENU.PAGE_DASHBOARD} element={<PageDashboard />} />
        <Route path={MENU.PAGE_ANCHOR} element={<PageAnchor />} />
        <Route path={MENU.PAGE_AVATAR} element={<PageAvatar />} />
        <Route path={MENU.PAGE_BADGE} element={<PageBadge />} />
        <Route path={MENU.PAGE_BUTTON} element={<PageButton />} />
        <Route path={MENU.PAGE_CARD} element={<PageCard />} />
        <Route path={MENU.PAGE_CHECKBOX} element={<PageCheckbox />} />
        <Route path={MENU.PAGE_DIVIDER} element={<PageDivider />} />
        <Route path={MENU.PAGE_DROPDOWN} element={<PageDropdown />} />
        <Route path={MENU.PAGE_SNACKBAR} element={<PageSnackbar />} />
        <Route path={MENU.PAGE_SELECT} element={<PageSelect />} />
        <Route path={MENU.PAGE_SPINNER} element={<PageSpinner />} />
        <Route path={MENU.PAGE_SWITCH} element={<PageSwitch />} />
        <Route path={MENU.PAGE_TABLE} element={<PageTable />} />
        <Route path={MENU.PAGE_TEXTAREA} element={<PageTextarea />} />
        <Route path={MENU.PAGE_TEXTFIELD} element={<PageTextfield />} />
        <Route path={MENU.PAGE_TOOLTIP} element={<PageTooltip />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
)