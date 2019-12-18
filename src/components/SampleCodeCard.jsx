import React from "react"

export default class SampleCodeCard extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.description}</p>
					<p>
						<code>{this.props.sourcecode}</code>
					</p>
					<a href="#" className="btn btn-primary">実行してみる</a>
				</div>
			</div>
		)
	}
}
