# Simple dp solution with explanation

**Author:** svolkovichs
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3148353/](https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3148353/)

---

# Intuition
Let's start with a simple problem with one segment. This problem could be solved with a sliding window. To solve the problem with 2 segments we can use dynamic programming.

# Approach
Let's define a dp[k] as the max segment in the first k elements. We can iterate an array and for every, i build a max possible segment ending on the ith element. Imagine for particular i we have have segment starting on j. In this case, segment length would be `i - j + 1`. dp[i+1] - max possible segment in the array up to index i. We can calculate `dp[i+1] = max(dp[i], i + j - 1)`. If we have some valid segment from j to i, then a max of 2 segments including this one will be a max segment in the first j elements + length of current segment - `dp[j] + (i - j + 1)`. The final answer for this problem will be `max(dp[j] + (i - j + 1))` for every possible i.

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# Code
```
/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function(prizePositions, k) {
    const n = prizePositions.length;
    let dp = new Array(n + 1).fill(0);
    let j = 0;
    let res = 0;
    for(let i = 0; i < n; i++) {
        while(prizePositions[i] > prizePositions[j] + k){
            j++;
        }
        let len = i - j + 1;
        dp[i + 1] = Math.max(dp[i], len);
        res = Math.max(res, dp[j] + len);
    }
    
    return res;
};


```