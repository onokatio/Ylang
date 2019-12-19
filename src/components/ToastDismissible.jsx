import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'

export default class ToastDismissible extends React.Component {
	render() {
		const [show, setShow] = useState(this.props.defaultshow);
		const toggleShow = () => setShow(!show)

		return (
			<Toast show={show} onClose={toggleShow}>
				<Toast.Header>
					<strong className="mr-auto">Compiler status message</strong>
					<small>0 mins go</small>
				</Toast.Header>
				<Toast.Body>Compile finished.</Toast.Body>
			</Toast>
		);
	}
}
