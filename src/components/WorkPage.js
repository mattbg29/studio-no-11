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
    const ref = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(ref.current.clientHeight);
    }, []);

    const widthNow = Component3()

    function ImgSelect() {
        return(
            <>
                {imgChoice.map((image,i) => 
                        <img style= {{
                            width: widthNow > 667 ? '600px' : widthNow*.9, 
                            marginTop: i === 0 ?'100px' : '-100px', 
                            marginBottom: widthNow > 1200 ? '200px' : '0px', 
                            opacity: i === 0 ? imageOpacity : 1-imageOpacity, 
                            transition: '100ms', 
                            position: i === 1 ? 'absolute' : '',
                            marginRight: widthNow < 900 ? 0 : widthNow - 900, 
                        }}
                        src={image} 
                        onMouseOver={()=>setArrowOpacity(.33)} 
                        onMouseLeave={()=> setArrowOpacity(0)} />
                    )}    
            </>
        )}
    

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <ImgSelect />                        
            <MapArrows2 arrowOpacity={arrowOpacity} setArrowOpacity={setArrowOpacity} setImageNow={setImageNow} imgLength={image.photo.length} imgNow={imageNow} setImageOpacity={setImageOpacity} width={widthNow}/>
            <div ref={ref} style={{position: widthNow > 1200 ? 'absolute' : '',  marginRight: widthNow > 1200 ? '-650px' : widthNow > 900 ? widthNow - 900 : '0', width: widthNow > 1200 ? '350px' : widthNow > 667 ? '600px' : widthNow * .9, marginBottom: widthNow > 1200 ? height-245 : '', height: widthNow > 1200 ? '' : 200}}>
                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>{image.title}</div>
                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>{image.location}</div>
                <>{image.description}</>
            </div>
        </div>
    )
}


function MapArrows2({arrowOpacity, setArrowOpacity, setImageNow, imgLength, imgNow, setImageOpacity, width}) {
    const arrows = [{name: leftArrow, marginRight: 1, trueMarginRight: width < 900 ? Math.min(575,width-50) : width - 330},{name: rightArrow, marginRight: -1,  trueMarginRight: width < 900 ? Math.min(575,width-50) : width - 710}]
    const curImg = imgNow.cur
    return(
        <>
            {arrows.map((arrow, i) => 
                    <img style={{
                        opacity: arrowOpacity, 
                        transition: '200ms', 
                        position: 'absolute', 
                        height: '100px', 
                        marginRight: i === 0 && width < 900 ? Math.min(575,width*.9-30) : i === 0 ? width - 330 : i === 1 && width > 900 ? width -1465 : '',
                        marginLeft: i === 1 && width < 900 ? Math.min(575,width*.9-30) : '',
                        marginBottom: '90px'}} 
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
