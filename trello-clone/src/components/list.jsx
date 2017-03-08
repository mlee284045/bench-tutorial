import React from 'react';
import { connect } from 'react-redux';
import CardContainer from './card';
import { listActions } from '../redux/actions';
import { store } from '../redux/store';

class List extends React.Component {
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

class ListContainer extends React.Component {
	constructor() {
		super();
		this.renderList = this.renderList.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.addCardToList = this.addCardToList.bind(this);
	}

	handleChange(e) {
		this.props.createList('New List');
		this.props.addList(store.getState().lastCreated.CREATE_LIST);
	}

	addCardToList(key) {
		let addCard = this.props.addCardToList;
		return function(cardId) {
			return addCard(cardId, key)
		}
	}

	renderList(key) {
		const list = this.props.lists[key];
		return (
			<List title={list.title} cards={list.cards} addCard={this.addCardToList(key)} key={key} />
		)
	}

	render() {
		return (
			<div>
				<div>
					<button onClick={this.handleChange}>
						Create List
					</button>
				</div>
				{Object.keys(this.props.lists)
							 .filter((id) => this.props.listIds.indexOf(id) !== -1)
							 .map(this.renderList)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		lists: state.listState,
		lastAction: state.lastCreated
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createList: (title) => {
			dispatch(listActions.createList(title))
		},
		addCardToList: (cardId, listId) => {
			dispatch(listActions.addCardToList(cardId, listId))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);