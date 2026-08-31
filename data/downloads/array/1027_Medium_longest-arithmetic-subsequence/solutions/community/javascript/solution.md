# 💡JavaScript Solution - DP

**Author:** AminiCK
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/494086/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/494086/)

---

### The idea
1. Define a `dp[index][diff]` hash, which saves the longest arithmetic sequence for an `index` with `diff`.  `diff` is defined by `A[i] - A[j]`.
2. We check if there was an existing record for element `j` with `diff`, which can be translated to `dp[j][diff]`. If so, that means we can add `i` to the previous chain `j` had with a different of `diff`.
``` javascript
/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    let dp = {};
    let max = 0;

    for (let i=0;i<A.length;i++) {
        if (dp[i]==null) dp[i] = {}; // init
        for (let j=0;j<i;j++) {
            let diff = A[i] - A[j];
            dp[i][diff] = 1 + (dp[j][diff]||1);
            max = Math.max(dp[i][diff], max);
        }
    }
    return max;
};
```