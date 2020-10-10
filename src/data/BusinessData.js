import React from 'react';
import {FaRegClock,FaMapMarkerAlt,FaPhone} from 'react-icons/fa'
const info=[
    {
        id:0,
        title:'Opening Hours',
        description:'We are open for 24/7 hours',
        icon: <FaRegClock />,
        background:'#35C8C6'
    },
    {
        id:1,
        title:'Visit our location',
        description:'Brooklyn 12/F3 states, United States',
        icon:<FaMapMarkerAlt />,
        background:'#3D4058'
    },
    {
        id:2,
        title:'Contact us now',
        description:'+0009 127338998',
        icon:<FaPhone />,
        background:'#35C8C6'
    },
]

export default info;