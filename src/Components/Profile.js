import React from 'react'
import { Link } from 'react-router-dom'

function Profile({ enroll }) {
    const GoLink=(link)=>{
        window.open(link, '_blank');
    }    
    return (
        <div className='Profile'>
            <div className='Title'>
                <img src={require('../img/profile.png')} alt='png' />
                <h1>Profile</h1>
            </div>
            <div className='details'>
                {
                    enroll.map((item, id) => {
                        return (
                            <div className='card' key={id}>
                                <div className='Left'>
                                    <div className='image'>
                                        <div className='Pic'>
                                            {
                                                (item.img) && <img src={URL.createObjectURL(item.img)} alt='png' />
                                            }
                                            {
                                                (!item.img) && ((item.Gen === 'Male') ?
                                                    <img src={require('../img/M.png')} alt='png' />
                                                    : <img src={require('../img/F.png')} alt='png' />)
                                            }
                                        </div>

                                    </div>
                                    <div className='Gen'>
                                        {
                                            (item.Gen === 'Male') ? <img src={require('../img/boy.png')} alt='png' /> : <img src={require('../img/girl.png')} alt='png' />
                                        }
                                        <p>{item.Gen}</p>
                                    </div>
                                </div>
                                <div className='Right'>
                                    <div className='Row'>
                                        <p><i className="fa-solid fa-address-card"></i> {item.Fname}</p>
                                        <p><i className="fa-solid fa-address-card"></i> {item.Lname}</p>
                                    </div>
                                    <div className='Row'>
                                        <p><i className="fa-solid fa-envelope"></i> {item.Email}</p>
                                    </div>
                                    <div className='Row'>
                                        <p><i className="fa-solid fa-medal"></i> {item.Skill}</p>
                                    </div>
                                    <div className='Row'>
                                        <p onClick={()=>{GoLink(item.Web)}}
                                        style={{
                                            cursor:'pointer'
                                        }} 
                                        >
                                        <i className="fa-solid fa-link"></i>
                                          {item.Web}
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile