import React, {Component} from 'react';
import '../css/homepage.css'

class Header extends Component {
	 render() {

	 	return (
	 		<header>
				<div class="shadow-lg p-3 mb-5 bg-white rounded">
					<h2><i class="far fa-sticky-note"></i> To-do list</h2>
				</div>
					
			</header>

			)
	 }
}

export default Header;