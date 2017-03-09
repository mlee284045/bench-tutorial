import React from 'react';

export default class Card extends React.PureComponent {
	render() {
		return (
			<div className="card">
				<div className="card-title">
					<input type="text" value={this.props.title} />
				</div>
				<div className="cardContent">
					<p>
						{this.props.text}
					</p>
				</div>
				<button onClick={this.props.editCard}>
					Edit Card
				</button>
			</div>
		)
	}
}
