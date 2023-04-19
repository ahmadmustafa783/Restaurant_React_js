import React from 'react'
import RouteNavbar from '../Navbar/RouteNavbar'
import Header from '../Header/Header'
import Coffe from "../CoffeBreak/CoffeBreak"
import Event from '../Event/Events'
import Menus from "../Menu/Menus"
import Forms from "../Form/Form"
import Clients from '../ClientFeedback/Client'
import News from '../News/NewsLetter'
import Gallery from '../Gallery/Gallery'
import Map from '../Map/Map'
import Contacts from '../ClientFeedback/Contacts'

import Footer from '../Footer/Footer'







function App() {



    return (
        <>

<RouteNavbar />


<Header />
<Coffe />
<Menus />


<Forms />
<Clients
    imgA={Contacts.imageA}
    imgB={Contacts.imageB}
    imgC={Contacts.imageC}
    para={Contacts.detail}
    pA={Contacts.p1}
    pB={Contacts.p2}
    pC={Contacts.p3}
    pD={Contacts.p4}
/>
<Event />
<News />
<Gallery />
<Map />
<Footer />



        </>
    )
}

export default App
