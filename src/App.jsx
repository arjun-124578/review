import React, { useState } from 'react'
import Login from './Login'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Form from './Form'
import Sidebar from './Sidebar'
import DashBoard from './DashBoard'


const App = () => {
  const [loginErrors, setLoginErrors] = useState({
    emailErr: false,
    passWordErr: false
  })
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: ""
  })

  const [formDetails,setFormDetails] = useState(
    {
      Shop_Name:"",
      GST_Number:"",
      Mobile_Number:"",
      Alt_Mobile_Number:"",
      Email_id:"",
      Subscription_Package:"",
      Subscription_Type:"",
      Discount_Type:"",
      Actual_Price:"",
      Discount:"",
      Discounted_Price:"",
      Address:"",
      Pincode:"",
      Country:"",
      State:"",
      City:"",
      Landmark:"",
      About:"",
      Img1:"",
      Img2:"",
    }
  )
  const navigate = useNavigate();

  const handleValidate = () => {

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = !regex.test(loginCred.email) || loginCred.email !="arjunanandan55@gmail.com";
    const passwordError = loginCred.password.length < 8 || loginCred.password != "12345678";

    setLoginErrors({emailErr:emailError,passWordErr:passwordError});

    if (emailError || passwordError)
      return;
    else
      navigate('/vendor')
  }

  const handleChange = (e) => {
  const { name, value } = e.target
  setFormDetails(prev => ({
    ...prev,
    [name]: value
  }))
}
const handleFileChange = (e) => {
  const { name, files } = e.target
  setFormDetails(prev => ({
    ...prev,
    [name]: name === "shopImages" ? [...files] : files[0]
  }))
}

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    Object.keys(formDetails).forEach((key) => {
      if (key === "shopImages") {
        formDetails.shopImages.forEach((file) => {
          data.append("shopImages", file);
        });
      } 
      else if (key === "categories") {
        data.append("categories", JSON.stringify(formDetails.categories));
      } 
      else {
        data.append(key, formDetails[key]);
      }
    });

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: data
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong");
    }

    console.log("Vendor Added:", result);
    setFormDetails({
      shopName: "",
      gstNumber: "",
      mobileNumber: "",
      alternateMobileNumber: "",
      email: "",
      actualPrice: "",
      discount: "",
      discountedPrice: "",
      address: "",
      pincode: "",
      landmark: "",
      aboutCompany: "",
      shopLogo: null,
      shopImages: [],
      categories: []
    });

  } catch (error) {
    console.error("Error submitting form:", error.message);
  }
};
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login
        loginErrors={loginErrors}
        setLoginErrors={setLoginErrors}
        setLoginCred={setLoginCred}
        loginCred={loginCred}
        handleValidate={handleValidate} />}/>
        <Route path="/vendor" element={<Form
         formDetails={formDetails}
        setFormDetails={setFormDetails}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/dashboard" element = {<DashBoard/>}/>
      </Routes>
     
    </div>
  )
}

export default App