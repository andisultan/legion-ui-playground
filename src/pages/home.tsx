import React from 'react'
import { Link } from 'react-router-dom'
import { MENU } from 'config/route'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full">
        <div className="max-w-lg">
            <h1 className="text-5xl text-red-700"><span className="text-2xl">Welcome to </span><br/>Legion-UI Playground</h1>
            <Link to={MENU.PAGE_DASHBOARD} className="w-full mt-9 p-4 bg-slate-800 text-white inline-block text-center">Enter</Link>
        </div>
    </div>
  )
}

export default Home