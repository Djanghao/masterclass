# 495 Teemo Attacking Javascript solution

**Author:** KondalDurgam
**Votes:** 10
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/865037/](https://leetcode.com/problems/teemo-attacking/solutions/865037/)

---

```

var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0 ) return 0; 
    let res = duration;
    for (let i = 1; i < timeSeries.length; i++) {
            res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    return res; 
};
```