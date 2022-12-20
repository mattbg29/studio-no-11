import Amplify from '@aws-amplify/core'
import config from '../../src/aws-exports'
import { API } from 'aws-amplify'
import { createCandidate } from '../../src/graphql/mutations'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Component3 } from './Dimensons'

Amplify.configure(config)


export default function ContactCard() {
    const [eventName, setEventName] = useState('')
    const [eventType, setEventType] = useState('')
    const [organizer, setOrganizer] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [message, setMessage] = useState('')
    const widthNow = Component3()
    
    const handleSubmit = async () => {
        const name = 'Event name: ' + eventName + ', event type: ' + eventType + ', organizer: ' + organizer + ', start date: ' + startDate + ', message: ' + message
        const email = 'hihi@frds.com'
        try {
          await API.graphql({
            query: createCandidate,
            variables: {
              input: {
                name,
                email,
              },
            },
          })
          console.log('success')
        } catch (e) {
          console.log(e)
        }
      }
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: widthNow > 500 ? '30vw' : '5vw', paddingTop: 150, paddingBottom: 50, maxWidth: '90vw'}}>
            <div style={{fontSize: '1.3em', marginBottom: 20}}>studio No. 11 lecture request</div>
            <div style={{marginBottom: 20}}>Thank you for your interest</div>
            <div style={{marginBottom: 20}}>Please fill out this form and we will get back to you as soon as possible</div>
            <form style={{marginBottom: 20}}>

                <div>Event name</div>
                <input type="text" style={{width: 340}} value={eventName} onChange={(e) => setEventName(e.target.value)}/>

                <div style={{marginTop: 20, marginBottom: 5}}>Event type</div>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <input type="radio" checked={eventType === 'Online'} onChange={() => setEventType('Online')}/>
                        <div style={{textAlign: 'center'}}>Online</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <input type="radio" checked={eventType === 'In Person'} onChange={() => setEventType('In Person')}/>
                        <div>In Person</div>
                    </div>
                </div>

                <div style={{marginTop: 20}}>Organizer</div>
                <input type="text" style={{width: 340}} value={organizer} onChange={(e) => setOrganizer(e.target.value)}/>

                <div style={{marginTop: 20}}>Date</div>
                <div style={{width: 340}}>
                <DatePicker selected={startDate} style={{width: 340, fontFamily: 'Europa'}} onChange={(date) => setStartDate(date)} />

                </div>

                <div style={{marginTop: 20}}>Message</div>
                <textarea style={{height: 50, width: 340, fontFamily: 'Europa'}} value={message} onChange={(e) => setMessage(e.target.value)}/>
            </form>
            <div className='contactSubmit' style={{width: '170px', cursor: 'pointer'}} onClick={()=>handleSubmit}>Submit</div>

        </div>
    )
}