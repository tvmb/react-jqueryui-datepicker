'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*global $*/

var DatePicker = function (_React$Component) {
	_inherits(DatePicker, _React$Component);

	_createClass(DatePicker, [{
		key: '_removePicker',
		value: function _removePicker() {
			var element = this.refs.datepicker;
			$(element).datepicker('destroy');
		}
	}, {
		key: '_addPicker',
		value: function _addPicker() {
			var element = this.refs.datepicker;
			$(element).datepicker();
		}
	}]);

	function DatePicker(props) {
		_classCallCheck(this, DatePicker);

		return _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));
	}

	_createClass(DatePicker, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this._addPicker();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			this._removePicker();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this._addPicker();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._removePicker();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('input', _extends({
				type: 'text',
				ref: 'datepicker',
				onChange: this.props.onChange
			}, this.props));
		}
	}]);

	return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = {
	onChange: _propTypes2.default.func
};

exports.default = DatePicker;
