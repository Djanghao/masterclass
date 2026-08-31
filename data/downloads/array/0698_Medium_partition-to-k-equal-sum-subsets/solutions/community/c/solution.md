# C++ DP bit manipulation in 20 lines

**Author:** tom0727
**Votes:** 207
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/480707/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/480707/)

---

The best solution for this problem is definitely bit manipulation DP with complexity `O(n2^n)`. Whereas dfs will render a expotential complexity and it is hard to analyze.

Here is my idea: We use `mask` to determine the state, the state will tell you "which numbers are selected already". For example `nums = [2,1,4,3,5,6,2], mask = "1100101"` , then that means we have already chosen `2,1,5,2`. 

Now, how do we consider the conversion between states? Consider the example above, it is clear that we have `4,3,6` unchosen so we can choose any of them. But, as explained in the leetcode official solution, we can't choose a number such that it crosses our `target`. And `dp[mask]` will represent `sum(chosen number) % target`. Hence the state conversion will become:

```dp[mask|(1<<i)] = (dp[mask]+nums[i]) % tar;```

An Example will be: `nums = [4, 3, 2, 3, 5, 2, 1], k = 4, tar = 5`
`dp["1100101"]` represents we have chosen 4,3,5,1, the sum is `4+3+5+1 = 13`, `13%5 = 3`, hence `dp["1100101"] = 3` 

If `dp["11111...1111"] == 0` then that means we can find the solution.

```
class Solution {
public:
    int dp[(1<<16)+2];
    bool canPartitionKSubsets(vector<int>& nums, int k) {
        int n = nums.size(), sum = 0;
        fill(dp, dp+(1<<16)+2, -1);
        dp[0] = 0;
        for (int i = 0; i < n; i++) sum += nums[i];
        if (sum % k) return false;
        int tar = sum/k;
        
        for (int mask = 0; mask < (1<<n); mask++) {
            if (dp[mask] == -1) continue;  // if current state is illegal, simply ignore it
            for (int i = 0; i < n; i++) {
                if (!(mask&(1<<i)) && dp[mask]+nums[i] <= tar) {  // if nums[i] is unchosen && choose nums[i] would not cross the target
                    dp[mask|(1<<i)] = (dp[mask]+nums[i]) % tar;
                }
            }
        }
        return dp[(1<<n)-1] == 0;
    }
};
```
