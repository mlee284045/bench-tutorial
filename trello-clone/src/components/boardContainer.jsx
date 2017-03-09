import React from 'react';
import { connect } from 'react-redux';
import Board from './board';
import { boardActions } from '../redux/actions';

class BoardContainer extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.renderBoard = this.renderBoard.bind(this);
		this.addListToCurrentBoard = this.addListToCurrentBoard.bind(this);
	}

	handleChange(e) {
		this.props.createBoard('New Board');
	}

	addListToCurrentBoard(key) {
		let addList = this.props.addListToBoard;
		return function(listId) {
			return addList(listId, key)
		}
	}

	renderBoard(key) {
		const board = this.props.boards[key]
		return (
			<Board title={board.title} lists={board.lists} key={key} addList={this.addListToCurrentBoard(key)}/>
		)
	}

	render() {
		return (
			<div>
				<button onClick={this.handleChange}>
					Create Board
				</button>
				{Object.keys(this.props.boards)
							 .filter((id) => this.props.boards[id].selected)
							 .map(this.renderBoard)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		boards: state.boardState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createBoard: (title) => {
			dispatch(boardActions.createBoard(title))
		},
		addListToBoard: (listId, boardId) => {
			dispatch(boardActions.addListToBoard(listId, boardId))
		},
		deleteListFromBoard: (listId, boardId) => {
			dispatch(boardActions.deleteListFromBoard(listId, boardId))
		}
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
