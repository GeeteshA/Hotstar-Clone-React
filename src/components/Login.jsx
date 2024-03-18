import React from 'react'
import "../Utility/Login.css"
import bgimg from "../images/login-background.jpg";
import logo2 from "../images/cta-logo-two.png";
import logo1 from "../images/cta-logo-one.svg"


const Login = () => {
  return (
    <div className='Container'>
      <div className="Content">
        <div className="CTA">
          <div className="CTALogoOne">
            <img src={logo1} />
          </div>
          <div className="SignUp">
            <a>GET ALL THERE</a>
          </div>
          <div className="Description">
            <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 01/26/24, the price of Disney+
            and The Disney Bundle will increase by 250.
            </p>
          </div>
          <img src={logo2} className='CTALogoTwo' />
        </div>
      <img src={bgimg} alt="" className="bgimg" />
      </div>
    </div>
  )
}

export default Login;

