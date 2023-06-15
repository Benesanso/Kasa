import LOGO from '../../assets/LOGO-footer.png';
import './footer.css';

function Footer() {
    return (
    <footer className='footer'>
        <img className='footer-logo' src={LOGO} alt="logo Kasa blanc sur fond noir"/>
        <div className='footer-info'>© 2020 Kasa. All rights reserved </div>
    </footer>
    )
}
export default Footer