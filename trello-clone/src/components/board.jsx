import React from 'react';
import ListContainer from './list';

export default class Board extends React.PureComponent {
	render() {
		return (
			<div className="board">
			<h1>{this.props.title}</h1>
			<ListContainer listIds={this.props.lists} addList={this.props.addList} />
			</div>
		)
	}
}

