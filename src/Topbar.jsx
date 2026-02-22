import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'
import { topBarUser } from './assets/content'


const Topbar = ({title}) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-md-between justify-content-start align-items-baseline mt-4 p-3 bg-white rounded-2">
                    <h3 className='bg-white fw-bold'>{title}</h3>
                    <div className='d-flex align-items-baseline justify-content-between bg-white w-25 ms-md-4 ms-2'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white' />
                        <FontAwesomeIcon icon={faBell} className='bg-white' />
                        <div className="dropdown bg-white">
                            <button
                                className="btn btn-light dropdown-toggle d-flex align-items-center ms-2 ms-md-4 ms-md-0 profDrop"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src={topBarUser[0]}
                                    alt="profile"
                                    className="profPicture"
                                />
                                <span className="mb-0 bg-light">{topBarUser[1]}</span>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar