type Fn = (...args) => any

interface Function {
    bindPolyfill(obj: Record<any, any>): Fn;
}

Function.prototype.bindPolyfill = function(obj): Fn {
    
}