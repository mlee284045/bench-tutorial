import React from 'react';
import CardContainer from './cardContainer';

export default class List extends React.PureComponent {
	render() {
		return (
			<div className="list">
				<h2>{this.props.title}</h2>
				<div>
					<CardContainer cardIds={this.props.cards} addCard={this.props.addCard} />
				</div>
			</div>
		)
	}
}