import React from 'react';
import vector from '../../../images/Vector.svg';
import vector2 from '../../../images/Vector2.svg';
import group from '../../../images/group.svg';
import wave from '../../../images/wave.svg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='Banner'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={vector} alt="" style={{ marginLeft: 'auto', marginRight: '-12px', display: 'block' }} />
                        <h1 className='toptext'>Here's your real Chance to </h1>
                            <h4 className='toptext2'>Find Love</h4>
                            <img src={wave} style={{marginTop:'0px'}} alt="" /> 
                        <p className='paragraph'> Glad to see you here! You’re now part of a select group who will be the first to date people and not just profiles.</p>
                        {/* <button type="button" class="btn banner-btn" style={{width:'152px', height:'41px',backgroundColor:'#87B2E5',borderRadius:'40px',color:'white'}}>Download App</button> */}
                        <a class="btn banner-btn" href="https://chance-app-assets.s3.ap-south-1.amazonaws.com/apk/ChanceAppBeta.apk" style={{width:'152px', height:'41px',backgroundColor:'#87B2E5',borderRadius:'40px',color:'white'}} role="button">Download App</a>
                    </div>
                    <div className="col-md-6">
                        <img src={vector2} alt="" />
                        <img src={group} alt="" style={{ height: '100%', width: '100%',marginTop:'14px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;