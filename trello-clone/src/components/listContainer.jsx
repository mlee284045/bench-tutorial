import React from 'react';
import { connect } from 'react-redux';
import List from './list';
import { listActions } from '../redux/actions';
import { store } from '../redux/store';

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
				<div className="create-list-container">
					<div className="create-list" onClick={this.handleChange}>
						Create List
					</div>
				</div>
				<div className="lists container">
					{Object.keys(this.props.lists)
								 .filter((id) => this.props.listIds.indexOf(id) !== -1)
								 .map(this.renderList)}
				</div>
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