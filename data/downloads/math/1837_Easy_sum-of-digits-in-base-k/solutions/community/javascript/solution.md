# Javascript 1-line (toString)

**Author:** saynn
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1178014/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1178014/)

---

```
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    return n.toString(k).split("").reduce((acc, cur) => +acc + +cur) 
};
```

toString(k) will convert the number to the base k