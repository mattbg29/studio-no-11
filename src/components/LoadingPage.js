import logo from "../assets/logo.jpg"

export default function Landing( {showIt }) {    
    return(
        <>
            <div style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
                <img className={`${showIt ? "logo" : "logo-hide"}`} src={logo}/>
            </div>
        </>
    )
    
}
