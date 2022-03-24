import React from 'react';
import logo from "../../../images/3.png";
import facebook from "../../../images/facebook.png";
import instragram from "../../../images/instagram.png";
import linkedin from "../../../images/linkedin.png";

const Footer = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                       <div className='text-center'>
                       <img className='mt-2' src={logo} alt="" />
                        <div className='mt-3 mb-3'>
                            <a href="" className='mx-2'><img src={facebook} alt="" /></a>
                            <a href="" className='mx-2'><img src={instragram} alt="" /></a>
                            <a href=""><img src={linkedin} alt="" /></a>
                        </div>
                        <a href="" style={{textDecoration:'none',color:'black'}}><p>Terms & condition</p></a>
                        <a href="" style={{textDecoration:'none',color:'black'}}><p>Privacy and policy</p></a>
                        <p>Email - admin@chanceapp.co</p>
                        <p>Made with ♥ in India</p>
                        <div  style={{borderTop:'1px dashed rgba(36, 35, 44, 0.5)'}}>
                            <p>Copyright © 2022 Happy Place App Pvt. Ltd.</p>
                            <p>All Rights Reserved.</p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;