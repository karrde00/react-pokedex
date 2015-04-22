define(['exports', 'module', 'react', 'js/components/List', 'js/collections/Pokemen', 'backbone'], function (exports, module, _react, _jsComponentsList, _jsCollectionsPokemen, _backbone) {
	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _React = _interopRequire(_react);

	var _List = _interopRequire(_jsComponentsList);

	var _Pokemen = _interopRequire(_jsCollectionsPokemen);

	var _Backbone = _interopRequire(_backbone);

	var App = (function (_Backbone$View) {
		function App() {
			_classCallCheck(this, App);

			_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
		}

		_inherits(App, _Backbone$View);

		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _React.render(_React.createElement(_List, { collection: _Pokemen }), document.body);
			}
		}]);

		return App;
	})(_Backbone.View);

	module.exports = App;
});