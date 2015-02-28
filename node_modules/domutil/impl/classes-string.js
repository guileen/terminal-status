exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.toggleClass = toggleClass;

// Constants from jQuery
var rclass = /[\t\r\n]/g;
var core_rnotwhite = /\S+/g;

// from jQuery
function hasClass(ele, className) {
    className = " " + className + " ";
    return (" " + ele.className + " ").replace(rclass, " ").indexOf(className) >= 0;
}

function addClass(ele, value) {
    var classes = (value || "").match(core_rnotwhite) || [],
            cur = ele.className ? (" " + ele.className + " ").replace(rclass, " ") : " ";

    if (cur) {
        var j = 0, clazz;
        while ((clazz = classes[j++])) {
            if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
            }
        }
        ele.className = cur.trim();
    }
}

function removeClass(ele, value) {
    var classes = (value || "").match(core_rnotwhite) || [],
            cur = ele.className ? (" " + ele.className + " ").replace(rclass, " ") : " ";

    if (cur) {
        var j = 0, clazz;
        while ((clazz = classes[j++])) {
            while (cur.indexOf(" " + clazz + " ") >= 0) {
                cur = cur.replace(" " + clazz + " ", " ");
            }
            ele.className = value ? cur.trim() : "";
        }
    }
}

function toggleClass(ele, value) {
    var classes = (value || "").match(core_rnotwhite) || [],
            cur = ele.className ? (" " + ele.className + " ").replace(rclass, " ") : " ";

    if (cur) {
        var j = 0, clazz;
        while ((clazz = classes[j++])) {
            var removeCount = 0;
            while (cur.indexOf(" " + clazz + " ") >= 0) {
                cur = cur.replace(" " + clazz + " ", " ");
                removeCount++;
            }
            if (removeCount === 0) {
                cur += clazz + " ";
            }
            ele.className = cur.trim();
        }
    }
}