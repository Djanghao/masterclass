# 🥷Smooth JS solution || Faster than  97.87% 🥷

**Author:** asadullakkh
**Votes:** 12
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/2615496/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/2615496/)

---

```
var areOccurrencesEqual = function(s) {
    let map = {};
    for(let i of s) map[i] = map[i] + 1 || 1;
    let arr = new Set(Object.values(map))
    return arr.size == 1;
};
```
 
 ![image](./images/0.png)

