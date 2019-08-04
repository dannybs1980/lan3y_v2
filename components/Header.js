import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGem from "@fortawesome/fontawesome-free-regular/faGem";

const Header = props => (
  <header id='header' style={props.timeout ? { display: "none" } : {}}>
    <div className='logo'>
      {/*<span className="icon fa-diamond"></span>*/}
      <FontAwesomeIcon icon={faGem} transform='grow-18' />
    </div>
    <div className='content'>
      <div className='inner'>
        <h1>Lan3y</h1>
        <p>
          Catch DJ Lan3y Every Saturday On UnknownRadio 3pm Till 5pm Playing The
          Best In UKG And All Things Bass!
          <p>
            <a href='https://unknownradio.uk/'>UnknownRadio</a>
          </p>
        </p>
        <div className='socials'>
          <a href='https://lan3y.co.uk/'>Twitter    </a>
          <a href='https://www.instagram.com/dj_lan3y/'>instagram   </a>
          <a href='https://www.mixcloud.com/Lan3yDubs/'>mixcloud    </a>
          <a href='https://www.mixcloud.com/Lan3yDubs/'>facebook    </a>
          
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
