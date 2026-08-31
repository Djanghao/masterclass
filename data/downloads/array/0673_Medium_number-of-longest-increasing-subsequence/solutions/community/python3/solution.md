# Python 3 | DP | Explanation

**Author:** idontknoooo
**Votes:** 108
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/835323/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/835323/)

---

### Intuition
- To find the frequency of the longest increasing sequence, we need 
	- First, know how long is the longest increasing sequence
	- Second, count the frequency
- Thus, we create 2 lists with length `n`
	- `dp[i]`: meaning length of longest increasing sequence
	- `cnt[i]`: meaning frequency of longest increasing sequence
- If `dp[i] < dp[j] + 1` meaning we found a longer sequence and `dp[i]` need to be updated, then `cnt[i]` need to be updated to `cnt[j]`
- If `dp[i] == dp[j] + 1` meaning `dp[j] + 1` is one way to reach longest increasing sequence to `i`, so simple increment by `cnt[j]` like this `cnt[i] = cnt[i] + cnt[j]`
- Finally, sum up `cnt` of all longest increase sequence will be the solution
- This is a pretty standard DP question. Just like most sequence type of DP question, we need to loop over each element and check all previous stored information to update current. 
- Time complexity is `O(n*n)`
### Implementation
```
class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        if not nums: return 0
        n = len(nums)
        m, dp, cnt = 0, [1] * n, [1] * n
        for i in range(n):
            for j in range(i):
                if nums[j] < nums[i]:
                    if dp[i] < dp[j]+1: dp[i], cnt[i] = dp[j]+1, cnt[j]
                    elif dp[i] == dp[j]+1: cnt[i] += cnt[j]
            m = max(m, dp[i])                        
        return sum(c for l, c in zip(dp, cnt) if l == m)
```