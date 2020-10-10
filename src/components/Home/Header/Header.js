import React from 'react'
import BusinessInfo from '../Business/BusinessInfo'
import Hero from '../Hero/Hero'
import Nav from '../Navbar/Nav'
import { HeaderComponent } from './Header.style'

function Header() {
    return (
        <HeaderComponent>
            <Nav />
            <Hero />
            <BusinessInfo />
        </HeaderComponent>
    )
}

export default Header
