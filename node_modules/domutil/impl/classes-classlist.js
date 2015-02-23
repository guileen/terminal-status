exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.toggleClass = toggleClass;

function hasClass(el, className) {
    return el.classList.contains(className);
}

function addClass(el, classes) {
    if (classes.indexOf(' ') >= 0) {
        classes.split(/\s+/).forEach(function(c) {
            el.classList.add(c);
        });
    } else {
        el.classList.add(classes);
    }
}

function removeClass(el, classes) {
    if (classes.indexOf(' ') >= 0) {
        classes.split(/\s+/).forEach(function(c) {
            el.classList.remove(c);
        });
    } else {
        el.classList.remove(classes);
    }
}

function toggleClass(el, classes) {
    if (classes.indexOf(' ') >= 0) {
        classes.split(/\s+/).forEach(function(c) {
            el.classList.toggle(c);
        });
    } else {
        el.classList.toggle(classes);
    }
}