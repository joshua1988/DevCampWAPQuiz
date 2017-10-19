function createClass(Parent, props) {
    var Kp;
    function F() {}

    if (!props) {
        props = Parent;
        Parent = Object;
    }

    F.prototype = Parent.prototype;

    function Klass() {
        if (this.initialize) {
            this.initialize.apply(this, arguments);
        }
    }
    Kp = Klass.prototype = new F;
    Kp.constructor = Klass;
    
    Klass.extend = function (props) {
        return createClass(this, props);
    };
    
    Klass.mixins = function (props) {
        createClass.merge(this.prototype, props);
        return this;
    };
    
    Klass.members = function (props) {
        createClass.each(props, function (val, prop) {
            if (Parent.prototype[prop]) {
                Kp[prop] = createClass.wrap(prop, val, Parent);
            } else {
                Kp[prop] = val;
            }
        });
        return this;
    };
    Klass.members(props);
    
    Klass.statics = function (props) {
        createClass.merge(this, props);
        return this;
    };
    return Klass;
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
createClass.merge = function (src, dest) {
    for(var prop in dest) {
        if (dest.hasOwnProperty(prop)) {
            src[prop] = dest[prop];
        }
    }
    return src;
};
createClass.each = function (dest, fn) {
    for(var prop in dest) {
        if (dest.hasOwnProperty(prop)) {
            fn.call(dest, dest[prop], prop);
        }
    }
};

var BaseClass = function() {};
createClass.merge(BaseClass.prototype, {
    initialize: function() { throw new Error("Base클래스로 객체를 생성 할 수 없습니다"); },
    destroy:function() {},
    proxy: function(fn) {
        var self = this;
        if (typeof fn === 'string') {
            fn = self[fn];
        }
        return function() {
            return fn.apply(self, arguments);
        };
    }
});

BaseClass.extend = function (props) {
    return createClass(this, props);
};
