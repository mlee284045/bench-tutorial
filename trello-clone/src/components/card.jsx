import React from 'react';

export default class Card extends React.PureComponent {
	render() {
		return (
			<div className="card">
				<h3>{this.props.title}</h3>
				<button onClick={this.props.editCard}>
					Edit Card
				</button>
				<div className="tags">
					<span>Working</span>
				</div>
				<div className="cardContent">
					<p>
						{this.props.text}
					</p>
				</div>
			</div>
		)
	}
}
