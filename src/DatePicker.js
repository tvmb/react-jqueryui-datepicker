/*global $*/

import React from 'react';
import PropTypes from 'prop-types';

class DatePicker extends React.Component {
	_removePicker () {
		const element = this.refs.datepicker;
		$ ( element ).datepicker ( 'destroy' );
	}
	
	_addPicker () {
		const element = this.refs.datepicker;
		$ ( element ).datepicker ();
	}
	
	constructor ( props ) {
		super ( props );
	}
	
	componentDidMount () {
		this._addPicker ();
	}
	
	componentWillReceiveProps () {
		this._removePicker ();
	}
	
	componentDidUpdate () {
		this._addPicker ();
	}
	
	componentWillUnmount () {
		this._removePicker ();
	}
	
	render () {
		return <input
			type="text"
			ref="datepicker"
			onChange={this.props.onChange}
			{...this.props}/>
	}
}

DatePicker.propTypes = {
	onChange : PropTypes.func
};

export default DatePicker;