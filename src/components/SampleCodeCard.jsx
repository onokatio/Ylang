import React from "react"

export default class SampleCodeCard extends React.Component {
	usecode = () => {
		document.getElementById("code").value = this.props.sourcecode;
	}
	render() {
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.description}</p>
					<p className="sourcecode">
						<code>{this.props.sourcecode}</code>
					</p>
					<button onClick={this.usecode} className="btn btn-primary">このソースコードを使う</button>
				</div>
			</div>
		)
	}
}
