import React from 'react';
import { connect } from 'react-redux';
import ListContainer from './list';
import { boardActions } from '../redux/actions';
// import { store } from '../redux/store';

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

class Board extends React.Component {
	render() {
		return (
			<div className="board">
			<h1>{this.props.title}</h1>
			<ListContainer listIds={this.props.lists} addList={this.props.addList} />
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
