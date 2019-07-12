import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {


    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">mixes</h2>





          <p>mixes will go here




          </p>

          <blockquote class="embedly-card"><h4><a href="https://www.mixcloud.com/Lan3yDubs/sounds-like-lan3y-vol-1/">Sounds Like Lan3y Vol 1</a></h4><p>UK Garage / Bass / Grime Club style... Upfront bangers and classic riddims. 42 tunes mixed fast and hard. Make sure you follow and share... hit me up if you want the D/L link Peace Lan3y</p></blockquote>
          <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>



          <blockquote class="embedly-card"><h4><a href="https://www.mixcloud.com/Lan3yDubs/todd-edwards-mixed-by-dj-laney/">Todd Edwards Mixed By Dj Laney</a></h4><p>Listen to Todd Edwards Mixed by DJ Laney by Lan3yDubs for free. Follow Lan3yDubs to never miss another show.</p></blockquote>
          <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>



          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Photos</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <span className="image main"><img src="/static/images/pic04.jpg" alt="" /></span>
          <p>

            photos will live here


            .</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>Laney has been involved in the rave scene since buying his first vinyl at South London’s Wax City Records at the age of 12.
               “raver” at heart Laney draws from his vast knowledge and love for the music as he selects forgotten gems to play against upfront bangers.

Vinyl and digital DJ with dubs and edits so no set is the same but guaranteed to bring the vibes and get the place rocking.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>

          <p>Feel free to contact me with your shouts or tunes!!</p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://lan3y.co.uk/">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="https://www.facebook.com/UnknownRadiouk/?__tn__=%2Cd%2CP-R&eid=ARBOl-T304-aMjgwXz7NMoCzFlWOmTheX8eoKSKYasSdT3t1dqmXVuio0t5Yooy2eBk7XEK7461aHSuH">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="https://www.instagram.com/dj_lan3y/">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main