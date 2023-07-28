import logo from '../../logo.svg';
import './header.css';

function Header() {
  return (
    <div className="Container_header">
      <header className="Header_box">
        <div>
            <img src={logo} className="Header_logo" alt="logo" />   
        </div>
        <ul className='Header_list'>
            <li>
                <p>Docs</p>
            </li>
            <li>
                <p>Help</p>
            </li>
            <li>
                <p>Git-hub</p>
            </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;