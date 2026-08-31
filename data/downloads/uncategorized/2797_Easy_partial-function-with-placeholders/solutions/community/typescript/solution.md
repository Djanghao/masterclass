# Typescript solution - Not so bad

**Author:** RedMonkez
**Votes:** 1
**Link:** [https://leetcode.com/problems/partial-function-with-placeholders/solutions/4338852/](https://leetcode.com/problems/partial-function-with-placeholders/solutions/4338852/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => JSONValue

function partial(fn: Fn, args: JSONValue[]): Fn {
    let j = 0;

    return function(...restArgs) {
        for (let i = 0; i < args.length; i++) {
            if (args[i] === "_") {
                args[i] = restArgs[j];
                j++;
            }
        }

        return fn(...args, ...restArgs.slice(j));
    };
};
```