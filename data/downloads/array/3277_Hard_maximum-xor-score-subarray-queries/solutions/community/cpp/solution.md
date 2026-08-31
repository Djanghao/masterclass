# Easier than it looks ✅ | Intuition and Logic  🔥

**Author:** AnujJadhav
**Votes:** 62
**Link:** [https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5718367/](https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5718367/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let's see the constraints!

We see that: `1 <= n == nums.length <= 2000`
this means we can solve for all pairs `(i, j)` separately and then use them in queries.

Now can we solve for all pairs `(i, j)`?

Given:
```
a[i] = a[i] ^ a[i+1]
```

Repeating steps:
```
(a0)                           (a1)                 (a2)             (a3)
(a0) ^ (a1)                    (a1) ^ (a2)          (a2) ^ (a3)
(a0^a1) ^ (a1^a2)              (a1^a2) ^ (a2^a3)
(a0^a1^a1^a2) ^ (a1^a2^a2^a3)
```

If we do it repeatedly we see the relation:
```
nums[st...end] = nums[st...end-1] ^ nums[st+1....end]
```



Do you see the subproblem? DP?
Now we can easily store solution for nums[st..end] is a dp, and then use this to calculate others.

```
// Base Case
dp[i][i] = nums[i];
```

```
// for range st to end
 dp[st][end] = dp[st][end-1] ^ dp[st+1][end]; 
```

But this is not enough!, we need the max value i.e. consider all the subarrays as well.

But we are using the subarrays only to create the dp \uD83D\uDC40.

So we can say:
```
dp[st][end] = max({dp[st][end], dp[st][end-1], dp[st+1][end]});
```

And that's it!
for all queries `[l, r]` just return `dp[l][r]`

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    vector<int> maximumSubarrayXor(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        vector<vector<int>> dp(n, vector<int>(n));
        for(int i = 0; i < n; i++)
            dp[i][i] = nums[i];
        
        for(int len = 2; len <= n; len++) {
            for(int st = 0; st + len - 1 < n; st++) {
                int end = st + len - 1;
                dp[st][end] = dp[st][end-1] ^ dp[st+1][end]; 
            }   
        }

        for(int len = 2; len <= n; len++) {
            for(int st = 0; st + len - 1 < n; st++) {
                int end = st + len - 1;
                dp[st][end] = max({dp[st][end], dp[st][end-1], dp[st+1][end]});
            }
        }

        vector<int> res;
        for(vector<int>& quer: queries) {
            int u = quer[0], v = quer[1];
            res.push_back(dp[u][v]);
        }

        return res;
    }
};
```