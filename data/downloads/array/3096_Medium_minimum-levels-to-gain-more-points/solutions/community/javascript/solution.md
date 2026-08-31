# JavaScript solution

**Author:** bnlvv
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4948041/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4948041/)

---


```
var minimumLevels = function(possible) {
    const total = possible.reduce((x, y) => (x + 2*y - 1), 0); 
    let prefix = 0; 
    for (const [i, x] of possible.entries()) {
        prefix += 2*x-1; 
        if (i < possible.length-1 && prefix > total - prefix) return i+1; 
    }
    return -1; 
};
```