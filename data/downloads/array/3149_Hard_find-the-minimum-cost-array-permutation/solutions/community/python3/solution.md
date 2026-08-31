# [Python] bit mask + DP | O(n * n * 2^n) | Explanation

**Author:** n124345679976
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5145616/](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5145616/)

---



# Approach
First, we observe that the cost function is rotation invariant, so we can simply set the first element of `perm` as 0.
Then we consider every time we set one element from the end of `perm`, we use `dp[i][mask]` to record the cost that `i` is the last element to be set, and all elements in masks are set.

For example, `dp[1][0b0011011]` records the cost of `perm` that is the concatenation of `[0], not determined [2,5,6], 1, permutation of [3,4] to have the minimum cost in [[3,4], 0].`
For example, `dp[3][0b111011001]` records the cost of `perm` that is the concatenation of `[0], not determined [1,2,5], 3, permutation of [4,6,7,8] to have the minimum cost in [[4,6,7,8],0].`

The transition of dp is to consider all possible concatenations if we set `j` from `i` was set lastly:
`dp[j][mask] = min(dp[i][mask ^ (1<<j)] + abs(j - nums[i]) for all i)`
The initial dp is `dp[i][1<<i] = abs(i - nums[0])`, recording the cost of `[0], underterined permutation of {1,...,n-1} \\ {i}, [i]`.
We also record the `i` to have the minimum cost for `j` in the dp transition.

Finally, we go through `dp[i][full_mask]` to add the cost `abs(0 - nums[i])` and check the minimum cost.
# TimeComplexity
O(n * n * 2^n)
# Code
In implement, we ignore the first element, [0], and decrease [1, 2, ..., n-1] by 1 to be [0, 1, ..., n-2] for dp transition.
``` python
class Solution:
    def findPermutation(self, nums: List[int]) -> List[int]:
        n = len(nums)
        dp = [[[-1, 1e9] for i in range(1<<(n-1))] for j in range((n - 1))]
        for i in range(n-1): # take i + 1
            dp[i][1<<i] = [-1, abs(i+1-nums[0])]
        for k in range(1 << (n-1)):
            for j in range(n-1):
                if k & (1<<j):
                    for i in range(n-1):
                        if i == j:
                            continue
                        if k & (1<<i):
                            if dp[i][k ^ (1<<j)][1] + abs(j + 1 - nums[i+1]) < dp[j][k][1]:
                                dp[j][k] = [i, dp[i][k ^ (1<<j)][1] + abs(j+1 - nums[i+1])]
        st = -1
        stsc = 1e9
        for i in range(n-1):
            if dp[i][-1][1] + abs(-nums[i+1]) < stsc:
                st = i
                stsc = dp[i][(1<<(n-1)) - 1][1] + abs(-nums[i+1])
        ans = [0]
        pre = st
        nowmask = (1<<(n-1)) - 1
        while pre != -1:
            ans.append(pre+1)
            p = pre
            pre = dp[pre][nowmask][0]
            nowmask ^= 1<<p
        return ans
```