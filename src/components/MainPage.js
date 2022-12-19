import { useState } from "react"
import logo from "./logo.jpg"
import { HomePage } from "./HomePage"
import { WorkPage2 } from "./WorkPage"
import AboutPage from "./About"
import ContactPage from "./ContactPage"

export default function MainPage() {
    const [curPage, setCurPage] = useState('Home')
    const pages = ['Work', 'About', 'Contact']
  
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', width: '99vw', justifyContent: 'space-between', position: 'fixed', backgroundColor: 'white', zIndex: '99', alignItems: 'center'}}>
                <img style={{width: '150px', height: 'auto', padding: 20, cursor: 'pointer'}} src={logo} onClick={() => setCurPage('Home')}/>        
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {pages.map(page => <div className="menu" style={{color: page === curPage ? 'black' : ''}} onClick={() => setCurPage(page)}>{page}</div>)}
                </div>
            </div>
            {curPage === 'Work' && <WorkPage2 />}
            {curPage === 'Home' && <HomePage />}
            {curPage === 'About' && <AboutPage />}
            {curPage === 'Contact' && <ContactPage />}
        </>
    );
  }


/*
function DisplayPage( {pages, setMainPage} ) {
    return(
        pages.map(page => <div className="menu" onClick={() => setMainPage(page)}>{page}</div>)
        )
}


export default function MainPage() {
    const pages = ['Work', 'About', 'Contact']
    const realPages = [HomePage, WorkPage2, HomePage, HomePage]
    const [MainPage, setMainPage] = useState(HomePage)
    const PageNow = realPages[pages.indexOf(MainPage)+1]

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', width: '99vw', justifyContent: 'space-between', position: 'fixed', backgroundColor: 'white', zIndex: '99'}}>
                <img style={{width: '125px', height: 'auto', padding: 20, cursor: 'pointer'}} src={logo} onClick={() => setMainPage(HomePage)}/>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <DisplayPage pages={pages} setMainPage={setMainPage}   />
                </div>
            </div>
            <PageNow />
        </>
    )

}

*/