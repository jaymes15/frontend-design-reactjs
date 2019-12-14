import React, {Component} from 'react';
import '../css/homepage.css'
import AddTask from './addtask.js';
import EditTask from './edittask.js';



class Form extends Component {
	 render() {

	 	return (
	 		<div class="forms">
	 			<AddTask/>
	 			<EditTask/>

	 		</div>
			)
	 }
}

export default Form;