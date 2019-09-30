import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>© 2019 innoPizza<span role='img' aria-label='pizza'> Made with ❤️ & 🍕 By  <a href='https://github.com.com/afolorunso' target="_blank" rel="noopener noreferrer">Folorunso Adesanya</a></span></p>
    </Menu.Item>
  </Menu>
);

export default Footer;
