import React from 'react'

import { MdMenu } from "react-icons/md";
const Nav = ({ show, setShow }) => {
    return (
        <div className='block md:flex w-full border-b border-black'>
            <div className={show ? `hidden` : `block`} onClick={() => setShow(!show)}>
                <MdMenu size={40}/>
            </div>
            <ul className='flex flex-wrap m-auto md:m-0 py-2 gap-5'>
                <li>Pograms</li>
                <li>Bookmarks</li>
                <li>Pending Invitation</li>
                <li>Collaboration</li>
            </ul>
        </div>
    )
}

export default Nav