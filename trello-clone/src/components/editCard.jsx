import React from 'react';

export default class Card extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			text: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({title: this.props.title, text: this.props.text});
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleClick(e) {
		this.props.completeEdit()(this.state.title, this.state.text)
	}

	render() {
		return (
			<div className="card">
				<div className="card-title">
					<input type="text" value={this.state.title} name="title" onChange={this.handleChange}/>
				</div>
				<div className="cardContent">
					<textarea value={this.state.text} name="text" onChange={this.handleChange}/>
				</div>
				<button onClick={this.handleClick}>
					Save
				</button>
			</div>
		)
	}
}
