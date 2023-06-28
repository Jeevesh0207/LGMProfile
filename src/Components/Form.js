import React, { useState } from 'react'

function Form({ enroll, setEnroll }) {
    const [Profile, setProfile] = useState(null)
    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [Email, setEmail] = useState('')
    const [Web, setWeb] = useState('')
    const [Skill, setSkill] = useState('')
    const [Gen, setGen] = useState('')

    const CLEAR = () => {
        setProfile(null)
    }
    const SKL = () => {
        let skill = ''
        const c1 = document.getElementById('C1')
        const c2 = document.getElementById('C2')
        const c3 = document.getElementById('C3')
        const c4 = document.getElementById('C4')
        const c5 = document.getElementById('C5')
        if (c1.checked === true) skill += `${c1.value} `
        if (c2.checked === true) skill += `${c2.value} `
        if (c3.checked === true) skill += `${c3.value} `
        if (c4.checked === true) skill += `${c4.value} `
        if (c5.checked === true) skill += `${c5.value} `
        setSkill(skill)
    }

    const GEN = () => {
        const M = document.getElementById('GM')
        const F = document.getElementById('GF')
        if (M.checked === true) setGen('Male')
        if (F.checked === true) setGen('Female')

    }

    const Enroll = (e) => {
        e.preventDefault()
        setProfile(null)
        let obj
        if (Profile!==null) {
            obj = {
                Fname: FName,
                Lname: LName,
                Email: Email,
                Web: Web,
                Skill: Skill,
                Gen: Gen,
                img: Profile,
            }
        }
        else
           {
            obj = {
                Fname: FName,
                Lname: LName,
                Email: Email,
                Web: Web,
                Skill: Skill,
                Gen: Gen,
                img: '',
            }
           }
        setEnroll([...enroll, obj])
        document.getElementById('Enrollform').reset()
    }


    return (
        <div className='Form'>
            <form id='Enrollform' onSubmit={(e) => Enroll(e)}>
                <div className='Left'>
                    <div className='profile'>
                        <div className='Pic'>
                            {Profile && <img src={URL.createObjectURL(Profile)} alt='png'/>}
                            <input type='file'
                                onChange={(e) =>{
                                    setProfile(e.target.files[0])
                                }}
                            ></input>
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            <p>Upload</p>
                        </div>
                    </div>
                    <div className='gender'>
                        <input type='radio' name='gen' id='GM' onChange={GEN} required></input>
                        <img src={require('../img/boy.png')} alt='png' />
                        <input type='radio' name='gen' id='GF' onChange={GEN} required></input>
                        <img src={require('../img/girl.png')} alt='png' />
                    </div>
                </div>
                <div className='Right'>
                    <div className='Row Name'>
                        <div className='Box1'>
                            <div className='FName'>
                                <input type='text' onChange={(e) => setFName(e.target.value)} required></input>
                                <label>First Name</label>
                                <i className="fa-solid fa-address-card"></i>
                            </div>
                            <div className='LName'>
                                <input type='text' onChange={(e) => setLName(e.target.value)} required></input>
                                <label>Last Name</label>
                                <i className="fa-solid fa-address-card"></i>
                            </div>
                        </div>
                    </div>
                    <div className='Row Email'>
                        <div className='Ebox'>
                            <input type='text' onChange={(e) => setEmail(e.target.value)} required></input>
                            <label>Email</label>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                    </div>
                    <div className='Row Website'>
                        <div className='link'>
                            <input type='text' onChange={(e) => setWeb(e.target.value)} required></input>
                            <label>Website</label>
                            <i className="fa-solid fa-link"></i>
                        </div>
                    </div>
                    <div className='Row Skills'>
                        <div className='skill'>
                            <label>Skills</label>
                            <input type='checkbox' value='HTML' id='C1' onChange={SKL}></input>
                            <p>HTML</p>
                            <input type='checkbox' value='CSS' id='C2' onChange={SKL}></input>
                            <p>CSS</p>
                            <input type='checkbox' value='JAVA' id='C3' onChange={SKL}></input>
                            <p>JAVA</p>
                            <input type='checkbox' value='REACT' id='C4' onChange={SKL}></input>
                            <p>REACT</p>
                            <input type='checkbox' value='NODE' id='C5' onChange={SKL}></input>
                            <p>NODE</p>
                        </div>
                    </div>
                    <div className='Row btn'>
                        <div className='Btn'>
                            <button  type='submit'>Enroll Now</button>
                            <button type='reset' onClick={CLEAR}>Clear</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>


    )
}

export default Form