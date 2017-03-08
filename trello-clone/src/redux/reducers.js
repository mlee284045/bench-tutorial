import { ActionTypes } from './constants';
import { combineReducers } from 'redux';

function tagReducer (state={}, action) {
	switch (action.type) {
		case ActionTypes.CREATE_TAG:
			return Object.assign({}, state, {[action.id]: action.tag});
		default:
			return state;
	}
}

function cardReducer (state={}, action) {
	switch (action.type) {
		case ActionTypes.CREATE_CARD:
			return Object.assign({}, state, {[action.id]: action.card});
		case ActionTypes.UPDATE_CARD: {

			let selectedCard = Object.assign({}, state[action.id]);
			selectedCard[action.key] = action.value;
			return Object.assign({}, state, {[action.id]: selectedCard});
		}
		case ActionTypes.ADD_TAG_TO_CARD: {

			let selectedCard = Object.assign({}, state[action.cardId]);
			selectedCard.tags = [...selectedCard.tags, action.tagId]
			return Object.assign({}, state, {[action.cardId]: selectedCard});
		}
		case ActionTypes.REMOVE_TAG_FROM_CARD: {

			let selectedCard = Object.assign({}, state[action.cardId]);
			selectedCard.tags = selectedCard.tags.filter((tag) => tag !== action.tagId)
			return Object.assign({}, state, {[action.cardId]: selectedCard});
		}
		default:
			return state;
	}
}

function listReducer (state={}, action) {
	switch (action.type) {
		case ActionTypes.ADD_CARD_TO_LIST: {
			let selectedList = Object.assign({}, state[action.listId]);
			selectedList.cards = [...selectedList.cards, action.cardId];
			return Object.assign({}, state, {[action.listId]: selectedList});
		}
		case ActionTypes.DELETE_CARD_FROM_LIST: {

			let selectedList = Object.assign({}, state[action.listId]);
			selectedList.cards = selectedList.cards.filter((card) => card !== action.cardId)
			return Object.assign({}, state, {[action.listId]: selectedList})
		}
		case ActionTypes.CREATE_LIST:
			return Object.assign({}, state, {[action.id]: action.list});
		default:
			return state;
	}
}

function boardReducer(state={}, action) {
	switch (action.type) {
		case ActionTypes.CREATE_BOARD:
			return Object.assign({}, state, {[action.id]: action.board})
		case ActionTypes.DELETE_LIST_FROM_BOARD: {
			let selectedBoard = Object.assign({}, state[action.boardId])
			selectedBoard.lists = selectedBoard.lists.filter((list) => list !== action.listId)
			return Object.assign({}, state, {[action.boardId]: selectedBoard})
		}
		case ActionTypes.ADD_LIST_TO_BOARD: {
			let selectedBoard = Object.assign({}, state[action.boardId])
			selectedBoard.lists = [...selectedBoard.lists, action.listId]
			return Object.assign({}, state, {[action.boardId]: selectedBoard})
		}
		default:
			return state;
	}
}

function lastCreated(state={}, action) {
	switch(action.type) {
		case ActionTypes.CREATE_BOARD:
		case ActionTypes.CREATE_LIST:
		case ActionTypes.CREATE_CARD:
		case ActionTypes.CREATE_TAG:
			return Object.assign({}, state, {[action.type]: action.id})
			// return [...state, action.id];
		default:
			return state;
	}
}

export const rootReducer = combineReducers({
	tagState: tagReducer,
	cardState: cardReducer,
	listState: listReducer,
	boardState: boardReducer,
	lastCreated: lastCreated
});