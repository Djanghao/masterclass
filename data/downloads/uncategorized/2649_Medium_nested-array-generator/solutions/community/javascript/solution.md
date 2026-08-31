# Javascript || Recursive Generator || O(n) Time and O(d) Space

**Author:** umopepisdn
**Votes:** 21
**Link:** [https://leetcode.com/problems/nested-array-generator/solutions/3439989/](https://leetcode.com/problems/nested-array-generator/solutions/3439989/)

---

Generator is a feature introduced in Javascript ES6. Through the `yield` keyword, we can pause function execution and return an intermediate value until the next time the generator is invoked.

`yield*` is used when we want to delegate to another Generator (in this case the recursive call).

Time complexity: O(n), where n is the # of *total* elements in array, i.e. `arr.flat().length`
Space complexity: O(d), where d is the maximum depth of the nested array

```
var inorderTraversal = function*(arr) {
    for (let element of arr) {
        if (Array.isArray(element)) {
            yield* inorderTraversal(element);
        } else {
            yield element;
        }
    }
};
```