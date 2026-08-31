# [Python3] [DP] Simple solution with steps and intuition

**Author:** leet_go
**Votes:** 35
**Link:** [https://leetcode.com/problems/number-of-great-partitions/solutions/2947979/](https://leetcode.com/problems/number-of-great-partitions/solutions/2947979/)

---

#### Intuition
Notice in the problem description that k < 1000 while number of subsets of the array can go as high as 2^1000, instead of thinking from the perspextive of iterating through each subset, we should think about how to use this "k" to resolve the problem.
#### Steps

- Define a sub-problem: 
`Find the total number of subsets in the array with their sums smaller than k.`. 
This is a classic DP problem [SubsetSum](https://leetcode.com/discuss/interview-question/1279773/google-interview-question-array-subset-sum-equals-k) with time complexity `O(N * K)`.
- For each of the invalid subset, it can be either the first or second of an invalid tuple.
- So, let the number of invalid subsets be X, total number of subsets pairs is 2^n, total valid subsets should be `2^n - 2 * X`.

 *Needs to think about edges cases where all pairs of subsets are invalid (`2 * X > 2^n`).*

#### Complexity
`O(N * K)`

#### Solution
```
class Solution:
    def countPartitions(self, nums: List[int], k: int) -> int:
        n = len(nums)
        dp = [[0] * (k + 1)] + [[-1] * (k + 1) for _ in range(n)]
        dp[0][0] = 1
        def subsetSumCounts(s, idx):
            if s < 0:
            	return 0
            if dp[idx][s] < 0:
                dp[idx][s] = subsetSumCounts(s, idx - 1) + subsetSumCounts(s - nums[idx - 1], idx - 1)
            return dp[idx][s]
                
        invalid_pairs = sum([subsetSumCounts(i, n) for i in range(k)]) * 2
        return max(2**n - invalid_pairs, 0) % (10**9 + 7)
```