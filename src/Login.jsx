import React from 'react'
import logo from './images/login.jpeg'
import Logo from './Logo';

const Login = ({ handleValidate, loginErrors, loginCred, setLoginCred }) => {


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-12 bg-white">
                    <div class="d-flex flex-column justify-content-around h-75 ms-5 bg-white">
                        <div className="col-12 bg-white">
                            <Logo/>
                        </div>
                        <div className='bg-white'>
                            <h3 className='py-2 bg-white' style={{ fontWeight: "650" }}>Welcome !</h3>
                            <p className='pb-4 text-gray bg-white'>welcome admin enter your details</p>
                            <form className="py-2 bg-white" action="
                            " onSubmit={(e) => { e.preventDefault(); handleValidate(); }}>
                                <label htmlFor="" className='mb-2 bg-white'>Email</label>
                                <input type="text" className='form-control w-50 mb-2 bg-white' placeholder='enter your email' onChange={(e) => { setLoginCred({ ...loginCred, email: e.target.value }) }} />
                                {loginErrors.emailErr && <p className='w-50 ms-2 text-start text-danger bg-white'>Invalid Email format</p>}
                                <label htmlFor="" className='mb-2 bg-white'>Password</label>
                                <input type="password" className="form-control w-50 mb-2 p-2" onChange={(e) => { setLoginCred({ ...loginCred, password: e.target.value }) }} />
                                {loginErrors.passWordErr && <p className='w-50 ms-2 text-start text-danger bg-white'>Invalid Password format</p>}
                                <button type="submit" className="btn btn-primary w-50 mt-3">Sign in</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 col-12 g-0">
                    <img src={logo} alt="Login" className='img-fluid login-img' />
                </div>
            </div>
        </div>
    )
}

export default Login