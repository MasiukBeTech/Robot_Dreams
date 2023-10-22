import backgroundImg from '/images.jpg'
import './Header.css'

function Header() {
    return(
        <header>
            <div className="header-mood">
                <h1>New Year's gifts</h1>
                <a href="#" target="_blank">
                    <img src={backgroundImg} className="backgroundImg" alt="New Year" />
                </a>
            </div>
        </header>
    );
}
export default Header;