import React from 'react'; 

const Header = () => {
  return(
    <div className = 'header'> 
      <nav>
        <div className="nav-wrapper #558b2f light-green darken-3">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header