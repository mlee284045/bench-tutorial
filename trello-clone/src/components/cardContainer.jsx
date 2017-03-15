import React from 'react';
import { connect } from 'react-redux';
import Card from './card';
import EditCard from './editCard';
import { cardActions } from '../redux/actions';
import { store } from '../redux/store';

class CardContainer extends React.Component {
	constructor() {
		super();
		this.renderCard = this.renderCard.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.completeEdit = this.completeEdit.bind(this);
	}

	handleChange(e) {
		this.props.createCard('New Card', 'Text Body Content');
		this.props.addCard(store.getState().lastCreated.CREATE_CARD);
	}

	completeEdit(id) {
		return (title, text) => {
			this.props.toggleEdit(id);
			this.props.updateCard(id, 'title', title);
			this.props.updateCard(id, 'text', text);
		}
	}

	renderCard(key) {
		const card = this.props.cards[key];
		 return card.editing ? <EditCard title={card.title} text={card.text} key={key} completeEdit={() => this.completeEdit(key)}/> :
			<Card title={card.title} tags={card.tags} text={card.text} key={key} editCard={() => this.props.toggleEdit(key)}/>;
	}

	render() {
		return (
			<div>
				<button onClick={this.handleChange}>
					Create Card
				</button>
				<div className="cards container">
					{Object.keys(this.props.cards)
								 .filter((id) => this.props.cardIds.indexOf(id) !== -1)
								 .map(this.renderCard)}
				</div>
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
		},
		toggleEdit: (key) => {
			dispatch(cardActions.toggleEdit(key))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);