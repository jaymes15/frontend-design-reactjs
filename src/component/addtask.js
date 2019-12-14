import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../css/homepage.css'

class AddTask extends Component {
	constructor(){
		super()
		this.state = {
			modalIsOpen : false
		}
		this.toggleModal = this.toggleModal.bind(this);
		
	};

	toggleModal(){
		this.setState({
			modalIsOpen : ! this.state.modalIsOpen
		})
	};

	
	 render() {

	 	return (
	 		<div>
	 			<button onClick={this.toggleModal} type="button" class="btn btn-primary">Add Task</button>
	 			<Modal isOpen={this.state.modalIsOpen}>
	 				<ModalHeader toggle={this.toggleModal} >Add Task</ModalHeader>
	 				<ModalBody>
	 									
											Task title:<br />
											<input type="text" name="title" /><br />
											Task description:<br />
											<input type="text" name="description" />
									   
	 				</ModalBody>
	 				<ModalFooter>
	 					<button class="btn btn-primary">Add Task</button>
	 					<button class="btn btn-secondary" onClick={this.toggleModal}>close</button>
	 				</ModalFooter>
	 			</Modal>	

	 		</div>
	 		
			)
	 }
}

export default AddTask;