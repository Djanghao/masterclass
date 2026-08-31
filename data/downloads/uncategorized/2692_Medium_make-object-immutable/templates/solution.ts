type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Array<JSONValue> | Record<string, JSONValue>;

function makeImmutable(obj: Obj): Obj {
    
};

/**
 * const obj = makeImmutable({x: 5});
 * obj.x = 6; // throws "Error Modifying x"
 */