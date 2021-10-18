import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';

var styles = {
    bmBurgerButton: {
      position: 'relative',
      width: '36px',
      height: '30px',
      left: '36px',
      bottom: '30px',
      textDecoration:'none',
      outline:'none'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'relative',
      height: '100%',
    },
    bmMenu: {
      background: 'linear-gradient(#fcffa4, #fff600 )',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display:'flex',
      flexDirection:'column',
    },
    bmItem: {
      display: 'inline-block',
      textDecoration:'none',
      outline:'none',
      color:'black',
      fontWeight:'700',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
    linked: {
      outline:'none', 
      textDecoration:'none', 
      color:'black', 
      margin:'0'
    }
}

export function HMenu(){
    return (
        <Menu styles={ styles } >
          <p id="home" className="menu-item"><Link style={styles.linked} to='/'>📅 Home </Link></p>
          <p id="about" className="menu-item"><Link style={styles.linked} to='/EventListing'>Event Listing </Link></p>
          <p id="contact" className="menu-item"><Link to='/create' style={styles.linked}>Create </Link></p>
        </Menu>
    )
}