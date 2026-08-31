# JavaScript DP From O(KN^2) to O(KN LogN)

**Author:** control_the_narrative
**Votes:** 6
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/728456/](https://leetcode.com/problems/super-egg-drop/solutions/728456/)

---

## Solution 1 - Naive DP [O(KN^2)]
This is a naive dynamic programing solution with a time complexity of `O(KN^2)`. 
In other programming laguages it barely passes the test cases. In JavaScript, however, it exceeds the time limit.
```
var superEggDrop = function(K, N) {
    const dp = Array.from({length: K+1}, () => Array.from(Array(N+1), (x, i) => i));
    dp[0] = Array(N+1).fill(0);
    
    for(let egg = 2; egg <= K; egg++) {
        for(let flr = 2; flr <= N; flr++) {
            let minDrops = Infinity, notBreak, eggBreak, worstCase;
            
            for(let i = 1; i <= flr; i++) {
                notBreak = dp[egg][flr-i];
                eggBreak = dp[egg-1][i-1];
                worstCase = Math.max(notBreak, eggBreak);
                minDrops = Math.min(minDrops, worstCase);
            }
            dp[egg][flr] = minDrops + 1;  
        }
    }
    return dp[K][N];
};
```

## Solution 2: Binary Search Optimization [O(KN LogN)]
Optimized version of the first solution. Passes all the test cases in time.
```javascript
var superEggDrop = function(K, N) {
    const dp = Array.from({length: K+1}, () => Array.from(Array(N+1), (x, i) => i));
    dp[0] = Array(N+1).fill(0);
    
    for(let egg = 2; egg <= K; egg++) {
        for(let flr = 2; flr <= N; flr++) {
            let low = 1, high = flr, result = flr;
            let left, right, mid;
            
            while (low < high) {
                mid = low + Math.floor((high - low) / 2)
                left = dp[egg - 1][mid - 1]; // egg break
                right = dp[egg][flr - mid]; // egg doesn't break
                result = Math.min(result, 1 + Math.max(left, right));
                
                if (left === right) break;
                else if (left < right) low = mid + 1;
                else high = mid;
            }
            dp[egg][flr] = result;
        }
    }
    return dp[K][N];
};
```