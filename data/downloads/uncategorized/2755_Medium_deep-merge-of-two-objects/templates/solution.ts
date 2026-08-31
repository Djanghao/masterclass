type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function deepMerge(obj1: JSONValue, obj2: JSONValue): JSONValue {
    
};

/**
 * let obj1 = {"a": 1, "c": 3}, obj2 = {"a": 2, "b": 2};
 * deepMerge(obj1, obj2); // {"a": 2, "c": 3, "b": 2}
 */
