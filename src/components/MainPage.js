import { useState } from "react"
import logo from "../assets/logo.jpg"
import { HomePage } from "./HomePage"
import { WorkPage2 } from "./WorkPage"
import AboutPage from "./About"
import ContactPage from "./ContactPage"
import { Component3 } from './Dimensons'

export default function MainPage() {
    const [curPage, setCurPage] = useState('Home')
    const pages = ['Work', 'About', 'Contact']
    const widthNow = Component3()
    const pagesReal = [<HomePage />, <WorkPage2 />, <AboutPage />, <ContactPage />]
    const pageIndex = pages.indexOf(curPage)

    return (
        <>
            <div style={{display: 'flex', flexDirection: widthNow > 400 ? 'row' : 'column', width: '99vw', justifyContent: 'space-between', position: 'fixed', backgroundColor: 'white', zIndex: '99', alignItems: 'center'}}>
                <img style={{width: '150px', height: 'auto', padding: 20, cursor: 'pointer'}} src={logo} onClick={() => setCurPage('Home')}/>        
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {pages.map(page => <div className="menu" style={{color: page === curPage ? 'black' : ''}} onClick={() => setCurPage(page)}>{page}</div>)}
                </div>
            </div>
            {pagesReal[pageIndex+1]}
        </>
    );
  }


