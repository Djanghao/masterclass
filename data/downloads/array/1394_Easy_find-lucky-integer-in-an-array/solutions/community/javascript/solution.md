# JavaScript, hash map

**Author:** hon9g
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/554920/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/554920/)

---

- Time Complexity: O(N)
- Space Somplexity: O(N)
```JavaScript
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = new Map();
    for (x of arr) {
        map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
    }
    return Math.max(...arr.filter(e => map.get(e) === e), -1);
};
```