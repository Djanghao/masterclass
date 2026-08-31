# Intuitive Javascript Solution

**Author:** DawChihLiou
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/92877/](https://leetcode.com/problems/number-of-boomerangs/solutions/92877/)

---

```
var numberOfBoomerangs = function(points) {
    let count = 0;
    
    for (let i = 0; i < points.length; i++) {
        const memory = {};

        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            
            // search points with identical distance in memory and count tuples
            const dist = Math.pow(points[i][0] - points[j][0],2) + Math.pow(points[i][1] - points[j][1],2);
            if (memory[dist]) count += memory[dist] * 2;
            
            memory[dist] ? memory[dist] += 1 : memory[dist] = 1;
        }
    }
    
    return count;
};
```