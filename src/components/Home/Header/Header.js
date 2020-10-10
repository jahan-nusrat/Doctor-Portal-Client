import React from 'react'
import Hero from '../Hero/Hero'
import Nav from '../Navbar/Nav'
import { HeaderComponent } from './Header.style'

function Header() {
    return (
        <HeaderComponent>
            <Nav />
            <Hero />
        </HeaderComponent>
    )
}

export default Header
