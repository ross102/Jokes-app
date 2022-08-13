import React from 'react'
import Navbar from './Navbar';

interface P {
    children: React.ReactNode
}

const Layout = ({children} : P) => {
    
    return (
        <div>
            <div>
            <Navbar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout