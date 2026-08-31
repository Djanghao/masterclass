# JavaScript Clean 3-Liner

**Author:** control_the_narrative
**Votes:** 24
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/668468/](https://leetcode.com/problems/arranging-coins/solutions/668468/)

---

```javascript
var arrangeCoins = function(n) {
    let stairs = 0;
    while(stairs <= n) { n -= stairs; stairs++; }
    return stairs-1
};
```