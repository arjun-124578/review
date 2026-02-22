import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { dashboarCards, dashboardCategories } from './assets/content'
import graph from './images/graph.jpeg'

const DashBoard = () => {
    return (
        <div className='container-fluid '>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10 ">
                    <div className="col-12">
                        <Topbar
                        title="dashboard"/>
                    </div>
                    <div className="col-12 mt-4 ">
                        <div className='bg-white row g-0 '>
                            {
                                dashboarCards.map((item,index) => {
                                    return (
                                        <div className={`col-12 col-md-3 p-5`}>
                                            <div className={`p-3 rounded-2 ${index % 2 === 0 ? "bg-pink" : "bg-blue"}`}>
                                                <div style={{backgroundColor:"inherit"}} className='fw-bold'>{item[0]}</div>
                                                <div className='d-flex' style={{backgroundColor:"inherit"}} >
                                                    <h2 className='bg-lightblue fw-bold mt-2' style={{backgroundColor:"inherit"}}>{item[1]}</h2>
                                                    <p className='ms-4 mt-3 fw-bold' style={{ color: item[3] ? "green" : "red",backgroundColor:"inherit" }}><span style={{backgroundColor:"inherit"}}>{item[3] ? "+" : "-"}</span>{`${item[2]}%`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row g-0 bg-white">
                        <div className="col-9 bg-white">
                            <div className='bg-white px-5 overflow-x-auto'>
                                <img src={graph} style={{ height: "410px", width: "837px"}} />
                            </div>
                        </div>
                        <div className="col-12 p-2 col-md-3 bg-white mt-1 pe-md-5">
                            <div className='p-4 bg-light rounded-4'>
                                <h6 className='bg-light fw-bold'>Categories</h6>
                                <div className='bg-light'>
                                    {
                                        dashboardCategories.map((item) => {
                                            return (
                                                <div className='d-flex mt-4 p-1 bg-white justify-content-around align-items-center'>
                                                    <img src={item[0]} alt="" className='dashboardCategoriesImg bg-white ' />
                                                    <h6 className='bg-white fw-bold'>{item[1]}</h6>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 bg-white p-5">
                             <div className='bg-white overflow-x-auto'>
                                <img src={graph} style={{ height: "370px", width: "1140px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard