# JS

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-manhattan-distances/solutions/4949794/](https://leetcode.com/problems/minimize-manhattan-distances/solutions/4949794/)

---

# Code
```
var minimumDistance = function(points) {
    let n = points.length;
    
    let sum = points.map((point) => point[0] + point[1]);
    let diff = points.map((point) => point[0] - point[1]);
    
    sum.sort((a, b) => a - b);
    diff.sort((a, b) => a - b);
    
    let ans = Math.max(sum[n - 1] - sum[0], diff[n - 1] - diff[0]);
    
    for (const point of points) {
        const curSum = point[0] + point[1];
        const curDiff = point[0] - point[1];
        let s0 = 0, s1 = n - 1, d0 = 0, d1 = n - 1;
        if (curSum == sum[s1]) s1--;
        if (curSum == sum[s0]) s0++;
        if (curDiff == diff[d1]) d1--;
        if (curDiff == diff[d0]) d0++;
        ans = Math.min(ans, Math.max(sum[s1] - sum[s0], diff[d1] - diff[d0]));
    }
    
    return ans;
    
};
```