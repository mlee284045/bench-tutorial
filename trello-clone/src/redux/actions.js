import { ActionTypes } from './constants';
import generateId from './helpers';

export const tagActions = {
	createTag: function (title) {
		return {
			type: ActionTypes.CREATE_TAG,
			id: generateId('tag'),
			tag: {
				title: title
			}
		}
	}
}

export const cardActions = {
	createCard: function (title, text) {
		return {
			type: ActionTypes.CREATE_CARD,
			id: generateId('card'),
			card: {
				editing: false,
				tags: [],
				title: title,
				text: text
			}
		}
	},
	updateCard: function (id, key, value) {
		return {
			type: ActionTypes.UPDATE_CARD,
			id,
			key,
			value
		}
	},
	toggleEdit: function (id) {
		return {
			type: ActionTypes.TOGGLE_EDIT,
			id
		}
	},
	addTag: function (cardId, tagId) {
		return {
			type: ActionTypes.ADD_TAG_TO_CARD,
			cardId,
			tagId
		}
	},
	removeTag: function (cardId, tagId) {
		return {
			type: ActionTypes.REMOVE_TAG_FROM_CARD,
			cardId,
			tagId
		}
	}
}

export const listActions = {
	addCardToList: function(cardId, listId) {
		return {
			type: ActionTypes.ADD_CARD_TO_LIST,
			cardId,
			listId
		}
	},
	deleteCardFromList: function(cardId, listId) {
		return {
			type: ActionTypes.DELETE_CARD_FROM_LIST,
			cardId,
			listId
		}
	},
	createList: function(title) {
		return {
			type: ActionTypes.CREATE_LIST,
			id: generateId('list'),
			list: {
				title, 
				cards: []
			}
		}
	}
}

export const boardActions = {
	createBoard: function(title) {
		return {
			type: ActionTypes.CREATE_BOARD,
			id: generateId('board'),
			board: {
				title,
				selected: true,
				lists: []
			}
		}
	},
	deleteListFromBoard: function(listId, boardId) {
		return {
			type: ActionTypes.DELETE_LIST_FROM_BOARD,
			listId,
			boardId
		}
	},
	addListToBoard: function(listId, boardId) {
		return {
			type: ActionTypes.ADD_LIST_TO_BOARD,
			listId,
			boardId
		}
	}
}