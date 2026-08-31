# Simple solution (JS)

**Author:** doniyor2109
**Votes:** 47
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/948621/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/948621/)

---

```
var maxNumberOfBalloons = function(text) {
    const map = { b: 0, a: 0, l: 0, o: 0, n: 0, };
    
    for (const l of text) {
        map[l]++; 
    }
    
    return Math.floor(
        Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n)
    );
};
```