import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGem from "@fortawesome/fontawesome-free-regular/faGem";

const Header = props => (
  <header id='header' style={props.timeout ? { display: "none" } : {}}>
    <div className='logo'>
      {/*<span className="icon fa-diamond"></span>*/}
      <FontAwesomeIcon icon={faGem} transform='grow--5' />
    </div>
    <div className='content'>
      <div className='inner'>
        <h1>Lan3y</h1>
        <p>
       Londons finest house and garage DJ
          <p>
      
          </p>
        </p>
        <div className='socials'>
          <a href='https://lan3y.co.uk/'>Twitter</a>
          <a href='https://www.instagram.com/dj_lan3y/'>instagram</a>
          <a href='https://www.mixcloud.com/Lan3yDubs/'>mixcloud</a>
          <a href='https://www.facebook.com/tommy.djlaney'>facebook</a>
          
        </div>
      </div>
    </div>

    <nav>
      <ul>
        <li>
          <a
            href='javascript:;'
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Mixes
          </a>
        </li>
        <li>
          <a
            href='javascript:;'
            onClick={() => {
              props.onOpenArticle("work");
            }}
          >
            Photos
          </a>
        </li>
        <li>
          <a
            href='javascript:;'
            onClick={() => {
              props.onOpenArticle("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href='javascript:;'
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
