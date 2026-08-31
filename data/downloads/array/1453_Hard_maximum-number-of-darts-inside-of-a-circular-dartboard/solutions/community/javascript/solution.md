# need help, why wa, use the idea of if any pair's distance <= 2*r, then they must in a circle

**Author:** zmj97
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/636364/](https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/636364/)

---

can anyone help me, why is this WA, I use the idea of if any pair's distance <= 2*r, then they must in a circle

```js
/**
 * @param {number[][]} points
 * @param {number} r
 * @return {number}
 */
var numPoints = function(points, r) {
    var maxLen = r * 2;
    var n = points.length;
    
    var isGreaterThanMaxLen = function(i, j) {
        var x = points[i][0] - points[j][0];
        var y = points[i][1] - points[j][1];
        return x * x + y * y > maxLen * maxLen;
    }
    
    var exceedPairs = [];
    var exceedCounts = new Array(n).fill(0)
    
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if (isGreaterThanMaxLen(i, j)) {
                exceedPairs.push([i, j]);
                exceedCounts[i]++;
                exceedCounts[j]++;
            }
        }
    }
    
    var getMin = function(exceedPairs, exceedCounts) {
        if (!exceedPairs.length) return 0;
        var exceedMax = 0;
        var maxIdxArr = [];
        for (var i = 0; i < n; i++) {
            if (exceedCounts[i] > exceedMax) {
                exceedMax = exceedCounts[i];
            }
        }
        for (var i = 0; i < n; i++) {
            if (exceedCounts[i] === exceedMax) {
                maxIdxArr.push(i);
            }
        }
        var min = n;
        for (var idx of maxIdxArr) {
            var newPairs = [];
            var newCounts = [...exceedCounts];
            for (var pair of exceedPairs) {
                if (pair[0] === idx || pair[1] === idx) {
                    newCounts[pair[0]]--;
                    newCounts[pair[1]]--;
                } else {
                    newPairs.push(pair);
                }
            }
            var thisCount = 1 + getMin(newPairs, newCounts);
            if (thisCount < min) min = thisCount;
        }
        return min;
    }
    
    return n - getMin(exceedPairs, exceedCounts);
    
};
```