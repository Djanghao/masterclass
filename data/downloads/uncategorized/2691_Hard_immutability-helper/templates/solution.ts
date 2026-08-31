type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type InputObj = Record<string, JSONValue> | Array<JSONValue>;

class ImmutableHelper {
    
    constructor(obj: InputObj) {
        
    }
    
    produce(mutator: (obj: InputObj) => void) {
        
    }
}

/**
 * const originalObj = {"x": 5};
 * const mutator = new ImmutableHelper(originalObj);
 * const newObj = mutator.produce((proxy) => {
 *   proxy.x = proxy.x + 1;
 * });
 * console.log(originalObj); // {"x: 5"}
 * console.log(newObj); // {"x": 6}
 */