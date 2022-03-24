import React from 'react';
import './Service.css';
import mask from "../../../images/mask.png";
import message from "../../../images/message.png";
import check from "../../../images/check.png";
import womenday from "../../../images/womens-day.png";
import processor from "../../../images/processors.png";
import shield from "../../../images/shield.png";
const Service = () => {
    return (
        <div>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card" style={{borderLeft:'4px solid red'}}>
                            <div style={{width:'48px',height:'48px',backgroundColor:'#FFF3F3',marginTop:'10px',borderRadius:'40px',marginLeft:'auto', marginRight:'auto',display:'block'}}>
                                
                            <img src={mask} class="" style={{marginTop:'15px',marginBottom:'auto',display:'block',marginLeft:'auto',marginRight:'auto'}} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Reveal when vibes match</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{borderLeft:'4px solid #67C7A5'}}>
                            <div style={{width:'48px',height:'48px',backgroundColor:'#F3FFF3',marginTop:'10px',borderRadius:'40px',marginLeft:'auto', marginRight:'auto',display:'block'}}>
                                
                            <img src={shield} class="" style={{marginTop:'15px',marginBottom:'auto',display:'block',marginLeft:'auto',marginRight:'auto'}} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Secrure & Private</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{borderLeft:'4px solid #F0B048'}}>
                            <div style={{width:'48px',height:'48px',backgroundColor:'#F3FBFF',marginTop:'10px',borderRadius:'40px',marginLeft:'auto', marginRight:'auto',display:'block'}}>
                                
                            <img src={processor} class="" style={{marginTop:'15px',marginBottom:'auto',display:'block',marginLeft:'auto',marginRight:'auto'}} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Smart matchmaking</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{borderLeft:'4px solid #FF5E93'}}>
                            <div style={{width:'48px',height:'48px',backgroundColor:'#FFF3F3',marginTop:'10px',borderRadius:'40px',marginLeft:'auto', marginRight:'auto',display:'block'}}>
                                
                            <img src={womenday} class="" style={{marginTop:'15px',marginBottom:'auto',display:'block',marginLeft:'auto',marginRight:'auto'}} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Safe for women</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{borderLeft:'4px solid  #2196F3'}}>
                            <div style={{width:'48px',height:'48px',backgroundColor:'#F3F3FF',marginTop:'10px',borderRadius:'40px',marginLeft:'auto', marginRight:'auto',display:'block'}}>
                                
                            <img src={check} class="" style={{marginTop:'15px',marginBottom:'auto',display:'block',marginLeft:'auto',marginRight:'auto'}} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Meet real people</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card"  style={{borderLeft:'4px solid  #FF6B51'}}>
                            <div style={{width:'48px',height:'48px',backgroundColor:'#FFF3F3',marginTop:'10px',borderRadius:'40px',marginLeft:'auto', marginRight:'auto',display:'block'}}>
                                
                            <img src={message} class="" style={{marginTop:'15px',marginBottom:'auto',display:'block',marginLeft:'auto',marginRight:'auto'}} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Customised icebreakers</h5>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Service;