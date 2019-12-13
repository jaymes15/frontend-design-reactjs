import React, {Component} from 'react';
import Form from './form.js'

class About extends Component{

	render() {

		return(
				<div className="about">
					<h1>To-Do Is a great device <br/>
					for managing time that<br />
					enables you to lay out <br/>
					everything that you need <br/>
					to accomplish and plan <br/>and prioritize your day from there.</h1>
					<Form />
				</div>
			) 
	}
}

export default About;