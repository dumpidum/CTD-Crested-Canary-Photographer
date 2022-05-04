import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <footer>
        <ul className='avatarLinks'>
            <li>
                <a
                    href='https://github.com/dumpidum/CTD-Crested-Canary-Photographer'
                    target='_blank'
                    rel='noreferrer'>
                    <FontAwesomeIcon className='avatarLink' icon={faGithub} />
                </a>
            </li>
        </ul>
        <p>&copy; {new Date().getFullYear()} by team CTD Crested Canary</p>
    </footer>
);

export default Footer;