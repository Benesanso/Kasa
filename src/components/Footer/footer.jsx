import LOGO from '../../assets/LOGO-footer.png';
import './footer.scss';

function Footer() {
    return (
    <footer className='footer'>
        <img className='logo' src={LOGO} alt="logo Kasa blanc sur fond noir"/>
        <div className='info'>© 2020 Kasa. All rights reserved </div>
    </footer>
    )
}
export default Footer