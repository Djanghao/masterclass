# JavaScript O(n) Simple solution using Map

**Author:** waynezhangyuwei1995
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/342042/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/342042/)

---

Permutation:
a -> 0
aa -> 1 (0 + 1) pairs
aaa -> 3 (1 + 2) paris
aaaa -> 6 (3 + 3) pairs
aaaaa -> 10 (6 + 4) pairs
.....

```
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let map = new Map();
    let count = 0;
    for (let [a , b] of dominoes) {
        let key = a < b ? `${a}${b}` : `${b}${a}`;

        if (map.has(key)) {
            let currentIndex = map.get(key) + 1;
            map.set(key, currentIndex);
            count += currentIndex;
        } else {
            map.set(key, 0);
        }
    }

    return count;
};
```