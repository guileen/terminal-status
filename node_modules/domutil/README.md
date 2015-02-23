# domutil

Simple standalone DOM utility functions, mostly ripped from jQuery.

## Installation

Browserify recommended.

	$ npm install domutil

In the codes:

	var du = require('domutil');

## API

#### `du.hasClass(el, className)`

#### `du.addClass(el, className)`

#### `du.removeClass(el, className)`

#### `du.toggleClass(el, className)`

#### `du.viewportSize(document)`

#### `du.stop(evt)`

Shortcut for:

	evt.preventDefault();
	evt.stopPropagation();

#### `du.setPosition(el, x, y)`

#### `du.setSize(el, width, height)`

#### `du.isElement(thing)`