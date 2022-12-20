import founder from './founder.jpg'
import { Component3 } from './Dimensons'
import { useState } from 'react'
import ContactCard from './ContactCard'

export default function AboutPage() {
    const [showForm, setShowForm] = useState(false)
    const widthNow = Component3()
    return(
        <>
            {showForm && <ContactCard />}
            {!showForm && <div style={{display: 'flex', alignItems: widthNow > 800 ? 'flex-end' : 'flex-start', justifyContent: 'center', flexDirection: widthNow < 800 ? 'column' : 'row', marginBottom: widthNow < 800 ? '' : '30vh', marginLeft: widthNow > 800 ? '' : widthNow > 400 ? '30vw' : '5vw'}}>
                <img style={{width: widthNow > 800 ? '25vw' : '40vw', marginTop: '20vh'}} src={founder}/>
                <div style={{display: 'flex', flexDirection: 'column', width: 350, marginLeft: widthNow < 800 ? '0' : 25}}>
                <div style={{marginBottom: 10}}>For new project inquiries, please contact:</div>
                    <div>Danielle Lands</div>
                    <div>Founder + Lead Designer</div>
                    <div>danielle@studiono11</div>
                    <div>215-528-2647</div>
                    <div style={{marginTop: 20}}>To request a lecture or to engage studio No. 11 in speaking engagements, panel debates, conferences, and the like, please fill out <span className='contact' onClick={() => setShowForm(true)}>this form</span></div>
                </div>
            </div>}
        </>
    )
}




/*
<div style={{marginBottom: 10}}>For new project inquiries, please contact:</div>
<div>Danielle Lands</div>
<div>Founder + Lead Designer</div>
<div>danielle@studiono11</div>
<div>215-528-2647</div>
<div style={{marginTop: 10}}>Lectures & speaking engagements:</div>
*/