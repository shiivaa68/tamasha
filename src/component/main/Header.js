import React from 'react'
import { FormattedMessage } from 'react-intl'

const Header = () => {
const menu = {
    'home':'https://site.come/home',
    'about':'https://site.come/about',
    'blog':'https://site.come/blog',
    'contacts':'https://site.come/contacts',
}
     
    return (
  <nav>
      <ul>
          {
              Object.keys(menu).map(key=>(
                  <li key={key}>
                      <a href={menu[key]}>
              <FormattedMessage id={`${key}`}/> 
                      </a>
                  </li>
              ))
          }
      </ul>
  </nav>
    )
}

export default Header;