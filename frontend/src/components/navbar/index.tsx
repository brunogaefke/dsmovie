import './styles.css'
import { ReactComponent as GithubIcon } from 'Assets/img/github.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <Link to="/">
                        <h1>DSMovie</h1>
                    </Link>
                    <a href="https://github.com/brunogaefke" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/brunogaefke</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar