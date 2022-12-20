import founder from '../assets/founder.jpg'
import { Component3 } from './Dimensons'

export default function AboutPage() {
    const widthNow = Component3()
    return(
        <div style={{display: 'flex', alignItems: widthNow > 800 ? 'flex-end' : 'center', justifyContent: 'center', flexDirection: widthNow < 800 ? 'column' : 'row', marginBottom: widthNow < 800 ? '' : '30vh'}}>
            <img style={{width: widthNow > 800 ? '25vw' : '40vw', marginTop: '20vh'}} src={founder}/>
            <div style={{display: 'flex', flexDirection: 'column', width: 350, marginLeft: widthNow < 800 ? 0 : 25}}>
                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Office</div>
                <>studio No. 11 is an architectural design firm that lives at the intersection of contextual design, sustainable technology and financial efficiency, striving to improve spaces through private and public projects</>
                <div style={{fontWeight: 'bold', marginBottom: '10px', marginTop: '20px'}}>Founder</div>
                <>studio No. 11 was founded by Danielle Lands in 2020. Upon graduating from the University of Pennsylvania with a Master’s of Architecture, Danielle worked alongside Denise Scott Brown as a research assistant, while holding a position as Adjunct Professor at Temple University in Philadelphia.</>
            </div>
        </div>
    )
}
