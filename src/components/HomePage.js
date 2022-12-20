import services_main from '../assets/services_main.jpg'
import { Component3 } from './Dimensons'


export function HomePage() {
    const images = [services_main, services_main]
    const widthNow = Component3()

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            {images.map((image, i) => 
            i === 1 && widthNow < 1000 ? '' 
            : widthNow < 1000 ? <img style={{width: '60vw', padding: '10px', marginTop: '18vh'}} src={image}/> 
            : <img style={{width: '40vw', padding: '10px', marginTop: '18vh'}} src={image}/>)}
        </div>

    )
}

/*
import services_main from './services_main.jpg'
import useWindowDimensions from './Dimensons'
import { useState } from 'react';

const Component = ({setWidth}) => {
    const { width } = useWindowDimensions();
  
    return (
        setWidth(width)
    );
  };


export function HomePage() {
    const images = [services_main, services_main]
    const [width, setWidth] = useState(0)

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Component setWidth={setWidth} />
            {images.map((image, i) => i === 1 && width < 1000 ? '' : <img style={{width: '480px', padding: '10px', marginTop: '18vh'}} src={image}/>)}
        </div>

    )
}

*/