# Typescript solution - Using call method

**Author:** RedMonkez
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-prototype-foreach/solutions/4338357/](https://leetcode.com/problems/array-prototype-foreach/solutions/4338357/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Callback = (currentValue: JSONValue, index: number, array: JSONValue[]) => any
type Context = Record<string, JSONValue>

Array.prototype.forEach = function(callback: Callback, context: Context): void {
	for (let i = 0; i < this.length; i++) {
        callback.call(context, this[i], i, this);
    }
}


/**
 *  const arr = [1,2,3];
 *  const callback = (val, i, arr) => arr[i] = val * 2;
 *  const context = {"context":true};
 *
 *  arr.forEach(callback, context)\xA0 
 *
 *  console.log(arr) // [2,4,6]
 */
```