import founder from './founder.jpg'
import { Component3 } from './Dimensons'

export default function AboutPage() {
    const widthNow = Component3()
    return(
        <div style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', flexDirection: widthNow < 800 ? 'column' : 'row'}}>
            <img style={{width: '350px', marginTop: widthNow < 800 ? 300 : 0, marginBottom: 30}} src={founder}/>
            <div style={{display: 'flex', flexDirection: 'column', width: 350, marginLeft: widthNow < 800 ? 0 : 25, marginBottom: -50}}>
                <div style={{marginBottom: 10}}>For new project inquiries, please contact:</div>
                <div>Danielle Lands</div>
                <div>Founder + Lead Designer</div>
                <div>danielle@studiono11</div>
                <div>215-528-2647</div>
                <div style={{marginTop: 10}}>Lectures & speaking engagements:</div>
            </div>
        </div>
    )
}
