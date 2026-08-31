type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => JSONValue

function partial(fn: Fn, args: JSONValue[]): Fn {
    
    return function(...restArgs) {
        
    }
};