import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      >
        {" "}
      </div>
    );

    return (
      <div
        id="main"
        style={
          this.props.timeout
            ? {
                display: "flex"
              }
            : {
                display: "none"
              }
        }
        //* this is were the mixes section is
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{
            display: "none"
          }}
        >
          <h2 className="major"> mixes </h2>{" "}
          <p> Check out my latest mixes below. </p>
          <p>
            {" "}
            If not you can always listen to my weekly radio show live every
            saturday 3pm-5pm.
            <h3>warming your saturdays up in style!</h3>
            <p>
              <a href="https://unknownradio.uk/">UnknownRadio</a>
            </p>
          </p>
          <iframe
            width="100%"
            height="120"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FLan3yDubs%2Ftodd-edwards-mixed-by-dj-laney%2F"
            frameborder="0"
          >
            {" "}
          </iframe>
          <iframe
            width="100%"
            height="120"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FLan3yDubs%2Fsounds-like-lan3y-vol-1%2F"
            frameborder="0"
          >
            {" "}
          </iframe>
          {close}{" "}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{
            display: "none"
          }}
        >
          <h2 className="major"> Photos </h2>
          <span className="image main">
            {" "}
            <img src="/static/images/pic03.jpg" alt="" />{" "}
          </span>{" "}
          <span className="image main">
            {" "}
            <img src="/static/images/pic04.jpg" alt="" />{" "}
          </span>
          {close}{" "}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{
            display: "none"
          }}
        >
          <h2 className="major"> About </h2>{" "}
          <p>
            Laney has been involved in the rave scene since buying his first
            vinyl at South London’ s Wax City Records at the age of 12. “ raver”
            at heart Laney draws from his vast knowledge and love for the music
            as he selects forgotten gems to play against upfront bangers. Vinyl
            and digital DJ with dubs and edits so no set is the same but
            guaranteed to bring the vibes and get the place rocking.
          </p>
          <span className="image main">
            {" "}
            <img src="/static/images/pic03.jpg" alt="" />{" "}
          </span>{" "}
          {close}{" "}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{
            display: "none"
          }}
        >
          <h2 className="major"> Contact </h2>
          <p> Feel free to contact me with your shouts or tunes!! </p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name"> Name </label>{" "}
              <input type="text" name="name" id="name" />
            </div>{" "}
            <div className="field half">
              <label htmlFor="email"> Email </label>{" "}
              <input type="text" name="email" id="email" />
            </div>{" "}
            <div className="field">
              <label htmlFor="message"> Message </label>{" "}
              <textarea name="message" id="message" rows="4">
                {" "}
              </textarea>{" "}
            </div>{" "}
            <ul className="actions">
              <li>
                {" "}
                <input
                  type="submit"
                  value="Send Message"
                  className="special"
                />{" "}
              </li>{" "}
              <li>
                {" "}
                <input type="reset" value="Reset" />{" "}
              </li>{" "}
            </ul>{" "}
          </form>{" "}
          <ul className="icons">
            <li>
              {" "}
              <a href="https://lan3y.co.uk/">
                <FontAwesomeIcon icon={faTwitter} />{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="https://www.facebook.com/UnknownRadiouk/?__tn__=%2Cd%2CP-R&eid=ARBOl-T304-aMjgwXz7NMoCzFlWOmTheX8eoKSKYasSdT3t1dqmXVuio0t5Yooy2eBk7XEK7461aHSuH">
                <FontAwesomeIcon icon={faFacebook} />{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="https://www.instagram.com/dj_lan3y/">
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              
            </li>{" "}
          </ul>{" "}
          {close}{" "}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Main;
