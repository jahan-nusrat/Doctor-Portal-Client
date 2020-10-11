import React from 'react';
import BusinessInfo from '../Business/BusinessInfo'
import Hero from '../Hero/Hero'
import HeroLeft from '../Hero/HeroLeft';
import Nav from '../Navbar/Nav'
import { HeaderComponent } from './Header.style';

const myComponent =<HeroLeft />

function Header() {
    return (
        <HeaderComponent>
            <Nav />
            {
                window.location.pathname==='/' && <Hero childComponent={myComponent} />
            }
            <BusinessInfo />
        </HeaderComponent>
    )
}

export default Header
