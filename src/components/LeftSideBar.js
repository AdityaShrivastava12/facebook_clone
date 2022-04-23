import React from 'react';
import {useSelector} from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LeftSideBar = () => {
  const {firstname,lastname} = useSelector(state => state.user.value);
  return (
    <div className="side-bar">
      <ul className="sidebar-ul">
        <li>
          <AccountCircleIcon style={{
            height: '36px',
            width: '36px'
          }}/>
          <p>{firstname.charAt(0).toUpperCase()}{firstname.slice(1)} {lastname.charAt(0).toUpperCase()}{lastname.slice(1)}</p>
        </li>
        <li>
          <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" alt=""/>
          <p>Friends</p>
        </li>
        <li>
          <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" alt=""/>
          <p>Memories</p>
        </li>
        <li>
           <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt=""/>
           <p>Groups</p>
        </li>
        <li>
           <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" alt=""/>
           <p>Marketplace</p>
        </li>
        <li>
          <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" alt=""/>
          <p>Watch</p>
        </li>
        <li>
           <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" alt=""/>
           <p>Saved</p>
        </li>
        <li>
           <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" alt=""/>
           <p>Pages</p>
        </li>
        <li>
           <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png" alt=""/>
           <p>Events</p>
        </li>
        <li>
           <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/hTN47HVa4oS.png" alt=""/>
           <p>Most Recent</p>
        </li>
        <li>
           <img className="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png" alt=""/>
           <p>Favuorites</p>
        </li>
      </ul>
    </div>
  )
}

export default LeftSideBar;
