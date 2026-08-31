type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>

function deepFilter(obj: Obj, fn: Function): Obj | undefined {
    
};