import React from "react"
import ReactDOM from "react-dom"

import Highlight from 'react-highlight.js'

export default class SampleCodeCard extends React.Component {
	usecode = () => {
		document.getElementById("code").value = this.props.sourcecode;
		window.location.href = '#origin-header'
	}
	render() {
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.description}</p>
					<Highlight language='javascript'>
						{this.props.sourcecode}
					</Highlight>
					<button onClick={this.usecode} className="btn btn-primary">このソースコードを使う</button>
				</div>
			</div>
		)
	}
}
