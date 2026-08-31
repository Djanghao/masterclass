# JavaScript implementation

**Author:** coreygo
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/377029/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/377029/)

---

JavaScript features used:
* [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
* [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
* [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```js
/**
 * @param {string} S
 * @return {number}
 */
const countLetters = function(S) {
    let count = 1;
    let result = 0;
    for(let [i, v] of Object.entries(S)) {
        // console.dir({i, v});
        v === S[i - 1] ? count += 1 : count = 1;
        result += count;
        // console.dir({count, result});
    }
    return result;
};
```