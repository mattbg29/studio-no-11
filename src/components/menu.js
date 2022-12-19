import { useState } from "react"
import { Services } from "./services_page"
import { Work } from "./work_page"
import Logo_02 from "./Logo_02.png"


export function Menu() {
    const [mainPage, setMainPage] = useState('Services')
    const pages = ['Services', 'Work', 'About', 'Contact', 'Francais']
    const realPages = [Services, Work]

    const DisplayPage = () => {
        return(
            pages.map(page => <div style={wrapper} onClick={() => setMainPage(page)}>{page}</div>)
            )
    }

    const PageNow = realPages[pages.indexOf(mainPage)]
    
    return(
        <>
            <div style={{padding: 10, display: 'flex', position: 'fixed', backgroundColor: 'white', width: '100vw', paddingBottom: 20}}>
                <img className="logo" src={Logo_02}/>
                <DisplayPage />
            </div>
            {<PageNow />}
        </>
    )
    
}

const wrapper = {
    cursor: 'pointer',
    padding: 5,
    
}

