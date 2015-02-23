var clazz;

if (typeof DOMTokenList !== 'undefined') {
    clazz = require('./impl/classes-classlist.js');
} else {
    clazz = require('./impl/classes-string.js');
}

module.exports = {
    hasClass: clazz.hasClass,
    addClass: clazz.addClass,
    removeClass: clazz.removeClass,
    toggleClass: clazz.toggleClass,

    viewportSize: function(doc) {
        return {
            width: doc.documentElement.clientWidth,
            height: doc.documentElement.clientHeight
        };
    },

    stop: function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    },

    setPosition: function(el, x, y) {
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    },

    setSize: function(width, height) {
        el.style.width = width + 'px';
        el.style.height = height + 'px';
    },

    isElement: function(el) {
        return el && el.nodeType === 1;
    }
};