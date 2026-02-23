import React from 'react'
import Logo from './Logo'
import { sidebarContent } from './assets/content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardQuestion, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div class="container-fluid mt-4 p-3 bg-white rounded-2">
            <div class="p-3 bg-white ms-5 ms-md-0">
                <Logo />
            </div>
            <div class="d-flex flex-column justify-content-between align-items-center h-100 mt-3 bg-white">
                <ul className="list-group pt-5 bg-white" style={{ listStyleType: "none" }}>
                    {sidebarContent.map((item) => {
                        return (
                            <li className="pt-1  list-group-item list-group-item-action border-0 bg-white g-0"><Link to="/dashboard" className='bg-white d-flex' style={{ textDecoration: "none", color: "inherit" }}><FontAwesomeIcon icon={item[0]} className='bg-white mt-1 pe-1' /><p className="bg-white">{item[1]}</p></Link></li>
                        )
                    })}
                </ul>
                <ul class="list-group mt-5">
                    <li class="d-flex py-1 ps-2 ps-md-0 pe-5 list-group-item list-group-item-action border-0 bg-white "><Link to="/vendor" className='bg-white d-flex' style={{ textDecoration: "none", color: "inherit" }}><FontAwesomeIcon icon={faClipboardQuestion} className='bg-white' /><p className='bg-white'>Vendors</p></Link></li>
                    <li class="d-flex py-1 ps-2 ps-md-0 pe-5 list-group-item list-group-item-action border-0 bg-white "><Link to="/" className='bg-white d-flex' style={{ textDecoration: "none", color: "inherit" }}><FontAwesomeIcon icon={faArrowRightFromBracket} className='bg-white' /><p className='bg-white'>Log Out</p></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar