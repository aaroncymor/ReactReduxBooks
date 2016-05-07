import React, { Component } from 'react';
import { connect } from 'react-redux'; //Glue between React and Redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList () {
		// this.props.books is the one from mapStateToProps '{books: state.books}'
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title}
					onClick = {() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// Whenever state changes, it will re-render automatically the object it returns.
function mapStateToProps(state) {
	// Whatever is returned will show as props
	// inside of BookList
	return {
		books: state.books
	};
}

// Anything returned from this function will end up as props
// on the BookList container (this.props.selectBook)
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed
	// to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes a function and component and produces
// a container. A container is a component that is aware of the state
// that is contained by redux. That mapStateToProps is the state
// and returns an object.
// *Promote BookList from a component to a container - it needs to know
// *about this new dispatch method, selectBook. Make it available
// *as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);