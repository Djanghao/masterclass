# JavaScript Clean and Simple Solution

**Author:** control_the_narrative
**Votes:** 8
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/806878/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/806878/)

---

```javascript
var mostVisited = function(n, rounds) {
    const start = rounds[0], end = rounds[rounds.length-1];
    const result = [];
    
    if(start <= end) {
        for(let i = start; i <= end; i++) result.push(i);
    } else {
        for(let i = 1; i <= end; i++) result.push(i);
        for(let i = start; i <= n; i++) result.push(i);
    }
    return result;
};
```