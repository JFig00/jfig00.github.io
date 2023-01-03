import { Outlet, Link } from 'react-router-dom';
import './styles/layout.css';

const Layout = () => {
    return (
        <>
            <nav className='navbar'>
                <ul className='fullNav'>
                    <li><Link to="/" className='item'>Home</Link></li>
                    <li><Link to="/About" className='item'>About</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Layout;