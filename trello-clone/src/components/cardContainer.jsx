import React from 'react';
import { connect } from 'react-redux';
import Card from './card';
import { cardActions } from '../redux/actions';
import { store } from '../redux/store';

class CardContainer extends React.Component {
	constructor() {
		super();
		this.renderCard = this.renderCard.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.createCard('New Card', 'Text Body Content');
		this.props.addCard(store.getState().lastCreated.CREATE_CARD);
	}

	editCard(key) {
		
	}

	renderCard(key) {
		const card = this.props.cards[key];
		if (card.editing) {
			return <EditCard
		}
		return (
			<Card title={card.title} tags={card.tags} text={card.text} key={key} />
		)
	}

	render() {
		return (
			<div>
				<button onClick={this.handleChange}>
					Create Card
				</button>
				{Object.keys(this.props.cards)
							 .filter((id) => this.props.cardIds.indexOf(id) !== -1)
							 .map(this.renderCard)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cards: state.cardState,
		lastAction: state.lastCreated
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createCard: (title, text) => {
			dispatch(cardActions.createCard(title, text))
		},
		updateCard: (id, key, value) => {
			dispatch(cardActions.updateCard(id, key, value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);