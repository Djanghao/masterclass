# Super easy javascript solution

**Author:** tsz_lam
**Votes:** 9
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/2414993/](https://leetcode.com/problems/merge-similar-items/solutions/2414993/)

---

```js
/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const map = {};
    const items = [...items1, ...items2];
    
    for (const [val, weight] of items) {
        if (map[val]) {
            map[val] += weight;
        } else {
            map[val] = weight;   
        }
    }
    
    return Object.entries(map);
};
```