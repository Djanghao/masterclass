# Simple O(1) without using Object.keys or JSON.stringify

**Author:** _sajid
**Votes:** 44
**Link:** [https://leetcode.com/problems/is-object-empty/solutions/3607988/](https://leetcode.com/problems/is-object-empty/solutions/3607988/)

---

Time/Space complexity of `JSON.stringify` and `Object.keys` depend on the size of the object/array hence execution time/space of above methods is not O(1)

We can instead use for-in loop since it works on both array as well as objects.

# Code
```
var isEmpty = function(obj) {
    for (let key in obj)
        return false;
    return true;
};
```

- If array/object is not empty, interpreter will enter the for-in loop and hence first return statement (false) will be executed.
- If array/object is empty, interpreter won't enter for-in loop and hence second return statement (true) will be executed.

---

<span style="color: #E91E63;font-family: monospace;font-style: italic;background: #ffe7ef;">Edit: It would be really nice of leetcode if they can give a small credit to this solution for copying this code and explanation to the editorial :). Because otherwise it makes my solution look like it has been copied from the editorial :(</span>

<span style="color: #E91E63;font-family: monospace;font-style: italic;background: #ffe7ef;">Happy Leetcoding! \u2764\uFE0F</span>