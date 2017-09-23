function createClass(Parent, props) {
    var Cp;
    function F() {}

    if (!props) {
        props = Parent;
        Parent = Object;
    }

    F.prototype = Parent.prototype;

    function Child() {
        if (this.initialize) {
            this.initialize.apply(this, arguments);
        }
    }
    Cp = Child.prototype = new F;
    Cp.constructor = Child;
    for(var prop in props) {
        if (props.hasOwnProperty(prop)) {
            if (Parent.prototype[prop]) {
                Cp[prop] = createClass.wrap(prop, props[prop], Parent);
            } else {
                Cp[prop] = props[prop];
            }
        }
    }
    Child.extend = function (props) {
        return createClass(this, props);
    };
    return Child
}

createClass.wrap = function (name, fn, supr) {
    return function () {
        var tmp = this.supr,
            ret;

        this.supr = supr.prototype[name];
        try {
            ret = fn.apply(this, arguments);
        } finally {
            this.supr = tmp;
        }
        return ret;
    }
};

var BaseClass = function() {};
BaseClass.extend = function (props) {
    return createClass(this, props);
};