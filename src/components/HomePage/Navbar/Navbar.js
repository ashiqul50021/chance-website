import React from 'react';
import navimg from "../../../images/3.png";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navcss navbar-light">
                <div className="container">
                    {/* <a className="navbar-brand"  href="#"> */}
                        <img src={navimg} alt="" style={{marginLeft:'auto',marginRight:'auto',display:'block', marginTop:'10px',marginBottom:'10px', height:'50px',width:'100px'}} class=""/>
                        
                            
                    {/* </a> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;