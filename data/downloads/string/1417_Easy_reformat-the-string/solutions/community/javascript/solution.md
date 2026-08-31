# JavaScript O(n) simple solution

**Author:** hon9g
**Votes:** 7
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/586802/](https://leetcode.com/problems/reformat-the-string/solutions/586802/)

---

- Time Complexity: O(n)
- Space Complexity: O(n)
```JavaScript
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let a = [], b = [];
    for (x of s) {
        isNaN(x) ? a.push(x) : b.push(x);
    }
    if (a.length < b.length) {
        [a, b] = [b, a];
    }
    return a.length - b.length <= 1
        ? a.map((x, i) => x + (b[i] ? b[i] : '')).join('')
        : '';
};
```