import services_main from './services_main.jpg'
import proj01 from './proj01.jpg'
import leftArrow from './leftArrow.JPG'
import rightArrow from './rightArrow.png'
import { useState, useLayoutEffect, useRef } from 'react'
import { Component3 } from './Dimensons'

export function WorkPage2() {
    const images = [
        {photo: [services_main, proj01], title: 'Home Addition', location: 'Fort Lauderdale, FL', description: 'Situated in a quaint neighborhood of Fort Lauderdale, the home of our clients needed expanding for their growing family and visiting relatives. Through intensive design meetings, we have doubled the interior square footage, brought in more light and created an outdoor living space, all while keeping with the original mid-century feel of the home. Originally designed by Lester Avery, we strived to keep as much of the original design intent as possible, while making the space more functional and flexible.'}, 
        {photo: [services_main, proj01], title: 'Bathroom Upgade', location: 'Boynton Beach, FL', description: 'The bathroom was upgraded for an affordable amount with a specific attention to color and style in order to brighten the space and add a touch of color. The light fixture, mirror, cabinet handles and showerhead selected all had chrome finishes, bringing a sense of cohesiveness to the small but functional space.'}, 
        {photo: [services_main, proj01], title: 'Home Addition', location: 'hii', description: 'wee'}, 
    ]
    return (
        images.map((image) => <WorkPage image={image} />)
    )
}

function WorkPage( {image}) {
    const [arrowOpacity, setArrowOpacity] = useState(0);
    const [imageNow, setImageNow] = useState({cur: 0, old: 1})
    const [imageOpacity, setImageOpacity] = useState(1)
    const imgChoice = [image.photo[imageNow.cur], image.photo[imageNow.old]]

    const widthNow = Component3()

    function ImgSelect() {
        return(
            <>
                {imgChoice.map((image,i) => 
                        <img style= {{
                            width: widthNow > 900 ? widthNow*.5 : widthNow*.9, 
                            marginTop: '100px', 
                            opacity: i === 0 ? imageOpacity : 1-imageOpacity, 
                            transition: '100ms', 
                            position: i === 1 ? 'absolute' : '',
                            paddingLeft: '30px', 
                            paddingRight: '30px', 
                            marginBottom: widthNow > 900 ? '15vw' : 10
                        }}
                        src={image} 
                        onMouseOver={()=>setArrowOpacity(.33)} 
                        onMouseLeave={()=> setArrowOpacity(0)} />
                    )}    
            </>
        )}
    

    return (
        <div style={{display: 'flex', alignItems: 'flex-end', flexDirection: widthNow > 900 ? 'row' : 'column'}}>
            <ImgSelect />                        
            <MapArrows2 arrowOpacity={arrowOpacity} setArrowOpacity={setArrowOpacity} setImageNow={setImageNow} imgLength={image.photo.length} imgNow={imageNow} setImageOpacity={setImageOpacity} width={widthNow}/>
            <div style={{width: widthNow > 900 ? '350px' : widthNow*.9, height: widthNow > 900 ? '' : 200, marginBottom: '15vw', marginRight: 30}}>
                <div style={{fontSize: '1.3em', marginBottom: '10px'}}>{image.title}</div>
                <div style={{fontSize: '1.1em', marginBottom: '10px'}}>{image.location}</div>
                <div style={{}}>{image.description}</div>
            </div>
        </div>
    )
}


function MapArrows2({arrowOpacity, setArrowOpacity, setImageNow, imgLength, imgNow, setImageOpacity, width}) {
    const arrows = [{name: leftArrow, marginRight: 1},{name: rightArrow, marginRight: -1}]
    const curImg = imgNow.cur
    return(
        <>
            {arrows.map((arrow, i) => 
                    <img style={{
                        opacity: arrowOpacity, 
                        transition: '200ms', 
                        position: 'absolute', 
                        height: '100px', 
                        paddingLeft: width > 900 ? i === 0  ? 30 : width*.5 : '',
                        paddingRight: width < 900 ? i === 1  ? 30 : width*.9 : '',
                        marginTop: width < 900 ? width*.33 : 0,
                        marginBottom: width > 900 ? `calc(15vw + ${width*.5*.2}px)`: 0}} 
                        src={arrow.name} 
                        onClick={()=> {
                            setTimeout(() => setImageOpacity(.9),0)
                            setTimeout(() => setImageNow({...imgNow, cur: ((imgNow.cur+arrow.marginRight)%imgLength < 0 ? imgLength-1 : imgNow.cur+arrow.marginRight)%imgLength, old: curImg} ), 75)
                            setTimeout(() => setImageOpacity(1),100)
                        }}
                        onMouseOver={()=>setArrowOpacity(.33)} 
                        onMouseLeave={()=> setArrowOpacity(0)}/>    
                )}                
        </>
    )
}



//onMouseOver={()=>alert('hihi')}
//            <img style={{opacity: arrowOpacity, transition: '200ms'}} src={leftArrow} onMouseOver={()=>setArrowOpacity(.25)} onMouseLeave={()=> setArrowOpacity(0)}/>
//<img style={{opacity: arrowOpacity, transition: '200ms', position: 'absolute', height: '100px', marginRight: '575px', marginTop: '100px'}} src={leftArrow} onMouseOver={()=>setArrowOpacity(.33)} onMouseLeave={()=> setArrowOpacity(0)}/>
//<img style={{opacity: arrowOpacity, transition: '200ms', position: 'absolute', height: '100px', marginRight: '-575px', marginTop: '100px'}} src={rightArrow} onMouseOver={()=>setArrowOpacity(.33)} onMouseLeave={()=> setArrowOpacity(0)}/>

//<MakeImage source={leftArrow} marginRight='575px' arrowOpacity={arrowOpacity} setArrowOpacity={setArrowOpacity} setImageNow={setImageNow} imgLength={image.length} imgNow={imageNow} />
//<MakeImage source={rightArrow} marginRight='-575px' arrowOpacity={arrowOpacity} setArrowOpacity={setArrowOpacity} setImageNow={setImageNow} />

//old: imgNow.cur, cur: ((imgNow+marginRight)%imgLength < 0 ? imgLength-1 : imgNow+marginRight)%imgLength

/*
function WorkText() {
    const words = 
        [[{title: 'hihi', location: 'abc', description: 'bibi'}, {title: 'hihihi', location: '123', description: 'bibibi'}], 
        [{title: 'hihi', location: 'abc', description: 'bibi'}, {title: 'hihihi', location: '123', description: 'bibibi'}],
        [{title: 'hihi', location: 'abc', description: 'bibi'}, {title: 'hihihi', location: '123', description: 'bibibi'}]]
    const test = <h1>hihi</h1>
    const mapNow = words.map((word) => {
        return(
            <div>
                <h1>word.title</h1>
                <h1>word.location</h1>
                <p>word.description</p>
            </div>
        )
    })

    return (        
        mapNow    
    )
}

function MapArrows(props) {
    const arrows = [{name: leftArrow, marginRight: 1},{name: rightArrow, marginRight: -1}]
    return (
        arrows.map((arrow) => 
            <MakeArrow source={arrow.name} marginRight={arrow.marginRight} arrowOpacity={props.arrowOpacity} setArrowOpacity={props.setArrowOpacity} setImageNow={props.setImageNow} imgLength={props.imgLength} imgNow={props.imgNow} setImageOpacity={props.setImageOpacity} />
        )
    )
}


function MakeArrow({source, marginRight, arrowOpacity, setArrowOpacity, setImageNow, imgLength, imgNow, setImageOpacity }) {
    let margin = ''
    if (marginRight === 1) {
        margin = '925px'
    } else {
        margin = '-225px'
    }
    const curImg = imgNow.cur
    return (
        <img style={{
            id: marginRight,
            opacity: arrowOpacity, 
            transition: '200ms', 
            position: 'absolute', 
            height: '100px', 
            marginRight: margin, 
            marginBottom: '90px'}} 
            src={source} 
            onClick={()=> {
                setTimeout(() => setImageOpacity(.9),0)
                setTimeout(() => setImageNow({...imgNow, cur: ((imgNow.cur+marginRight)%imgLength < 0 ? imgLength-1 : imgNow.cur+marginRight)%imgLength, old: curImg} ), 75)
                setTimeout(() => setImageOpacity(1),100)
            }}
            onMouseOver={()=>setArrowOpacity(.33)} 
            onMouseLeave={()=> setArrowOpacity(0)}/>
    )
}
*/

//{width: '600px', marginTop: '100px', marginBottom: '200px', opacity: imageOpacity, transition: '100ms',  marginRight: '350px', position: 'absolute', opacity: 1-imageOpacity}
//            <img style={imgStyle} src={image.photo[imageNow.cur]} onMouseOver={()=>setArrowOpacity(.33)} onMouseLeave={()=> setArrowOpacity(0)}/>
//<img style={imgStyle} src={image.photo[imageNow.old]} onMouseOver={()=>setArrowOpacity(.33)} onMouseLeave={()=> setArrowOpacity(0)} />
