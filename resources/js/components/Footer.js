import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>© 2019 innoPizza<span role='img' aria-label='pizza'> ❤️🍕🍕 Built by <a href='https://innoscripta.com/' target="_blank" rel="noopener noreferrer">innoPizza</a></span></p>
    </Menu.Item>
  </Menu>
);

export default Footer;
