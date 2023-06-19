import { Routes, Route,} from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/header'
import Footer  from './components/Footer/footer'
import About from './pages/About/about'
import Logement from './pages/Logements/Logements'
import logements from './data/logements.json';
import { useEffect, useState } from 'react'
import ErrorPage from './components/ErrorPage/ErrorPage';
import './scss/reset.scss'

function Layout () {
    const [apparts, setApparts] = useState([])
    useEffect(()=>{
        setApparts(logements)
    },[])
    return (
        <div className='layout'>
            <Header />
            <Routes>
                <Route path="/" element = {<Home Logements={apparts}/>} />
                <Route path="/about" element = {<About />} />
                <Route path="/logements/:logementId" element={<Logement Logements={apparts}/>} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Layout