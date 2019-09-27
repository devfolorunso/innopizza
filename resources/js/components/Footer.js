import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component{
    render(){ 
        return (
    <div class="footer">
        <p>&copy; 2019  innoPizza<span role='img' aria-label='pizza'> 🍕🍕🍕 Built by <a href='http://github.com/afolorunso/' target="_blank" rel="noopener noreferrer">Folorunso Adesanya</a></span></p>
    </div>
    )

    }
}

export default Footer;
if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}