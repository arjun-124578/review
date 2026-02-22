import React from 'react'
import Sidebar from './Sidebar'
import { addNewVendorContent, addressDetailsDropdown, addressDetailstext, SubDetailsDropdown, subDetailstext, addressDetailstext2, categoryCards } from './assets/content'
import Topbar from './Topbar'
const Form = ({ formDetails, setFormDetails, handleChange, handleFileChange,handleSubmit}) => {
    return (
        <div class="container-fluid ">
            <div className="row">
                <div className="col-12 col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-lg-10">
                    <Topbar
                        title="vendor" />
                    <div className="row mt-4">
                        <div className="col-12">
                            <form action="" className="" onSubmit={handleSubmit}>
                                <div className="row bg-white g-0 p-3 rounded-2">
                                    <div className="col-12 bg-white">
                                        <h6 className="bg-white p-2 fw-bold">Add New Vendor</h6>
                                    </div>
                                    {addNewVendorContent.map((item) => {
                                        return (
                                            <div class={` col-12 col-md-${item[1]} mb-4 bg-white p-2`}>
                                                <label forHtml="" className="text bg-white">{item[0]}</label>
                                                <input type="text" name={item[2]} value={formDetails[item[2]] || ""} onChange={handleChange} className='form-control' />
                                            </div>
                                        )
                                    })}
                                    <div className="col-12 bg-white">
                                        <h6 className='bg-white fw-bold'>Subscription Details</h6>
                                    </div>
                                    {
                                        SubDetailsDropdown.map((item) => {
                                            return (
                                                <div className={`dropdown-center col-12 col-md-${item[1]} mb-4 bg-white p-2 d-flex flex-column`}>
                                                    <label htmlFor="" className='bg-white'>{item[0]}</label>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Action two</a></li>
                                                        <li><a class="dropdown-item" href="#">Action three</a></li>
                                                    </ul>
                                                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                    {

                                        subDetailstext.map((item) => {
                                            return (
                                                <div class={`col-${item[1]} col-12 mb-4 bg-white p-2`}>
                                                    <label htmlFor="" className="bg-white">{item[0]}</label>
                                                    <input type="text" className="form-control" name={item[2]} value={formDetails[item[2]] || ""} onChange={handleChange} />
                                                </div>
                                            )
                                        })
                                    }
                                    <h6 className="bg-white fw-bold">Address Details</h6>
                                    {
                                        addressDetailstext.map((item) => {
                                            return (
                                                <div class={`col-md-${item[1]} col-12 mb-4 bg-white p-2`}>
                                                    <label forHtml="" className="text bg-white">{item[0]}</label>
                                                    <input type="text" className='form-control' name={item[2]} value={formDetails[item[2]] || ""} onChange={handleChange} />
                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        addressDetailsDropdown.map((item) => {
                                            return (
                                                <div className={`dropdown-center col-12 col-md-${item[1]} mb-4 bg-white p-2 d-flex flex-column`}>
                                                    <label htmlFor="" className='bg-white'>{item[0]}</label>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Action two</a></li>
                                                        <li><a class="dropdown-item" href="#">Action three</a></li>
                                                    </ul>
                                                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        addressDetailstext2.map((item) => {
                                            return (
                                                <div class={`col-12 col-md-${item[1]} mb-4 bg-white p-2`}>
                                                    <label forHtml="" className="text bg-white">{item[0]}</label>
                                                    <input type="text" className='form-control' name={item[2]} value={formDetails[item[2]] || ""} onChange={handleChange} />
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="col-6 col-md-4 bg-white">
                                        <div className='d-flex flex-column p-2 bg-white'>
                                            <label htmlFor="" className='bg-white fw-bold'>Add Shop Logo</label>
                                           <input type="file"
                                                name="shopLogo"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                alt="Submit" width="48" height="48" className='bg-white'></input>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <div className='d-flex flex-column p-2 bg-white'>
                                            <label htmlFor="" className='bg-white fw-bold'>Add Shop Images</label>
                                            <input type="file"
                                                name="shopLogo"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                alt="Submit" width="48" height="48" className='bg-white'></input>

                                        </div>
                                    </div>
                                    <div className="col-12 bg-white mt-4">
                                        <h6 className='bg-white mb-3 fw-bold'>Categories Dealing With</h6>
                                    </div>

                                    {
                                        categoryCards.map((item, index) => {

                                            return (

                                                <div className={`col-md-${item[2]} col-6 bg-white d-flex flex-column mb-3`} onClick={() => { setFormDetails(...formDetails, !categories[index] ? item[1] : false) }}>
                                                    <img src={item[0]} alt={item[0]} className='categoryCardImg bg-white' />
                                                    <label htmlFor="" className='ps-3 bg-white categoryCardsText'>{item[1]}</label>
                                                </div>

                                            )

                                        })
                                    }
                                </div>
                                <div className='w-100 d-flex justify-content-end pe-5'>
                                    <button type="submit" className='btn btn-warning px-5'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form