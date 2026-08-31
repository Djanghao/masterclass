# 🔥 DP and DFS | Very Clearly Explained! | O(n) Time

**Author:** PythonerAlex
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/2167909/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/2167909/)

---

***Solution 1: Dynamic Programming***

**Intuition**
We can use DP (dynamic programming) to loop through nums and find the biggest alternating subsequence num.

**Algorithm**
We first initialize a `n` by `2` matrix where `n = len(nums)`. In a supposed index of `dp[i][j]`, `i` stands for the index of `dp` based on the such index of `nums` given from the input, while `j` stands for whether we add or subtract a number for the last value. If `j == 0`, then we add, if `j==1`, then we subtract. This means `dp[i][0]` means that we have a plus for the last value, while `dp[i][1]` means we have a minus for the last value. Before we start the iteration, we need to pre-define `dp[0][0]` as `nums[0]` as the index is both `0`. We also need to pre-define `dp[0][1]` as `0` since we have to start by adding given the question, thus we put 0.

Next, we iterate through `nums` in a range for loop from index `1` to `n`, we start on index `1` instead of `0` because index `0` is already pre-defined. Each iteration, we try either to choose (meaning we choose to go or continue to add/subtract) or not choose (meaning we continue iterating through the array without making an alternating subsequence) for when the last value is plus (`dp[i][0]`) and when the last value is minus. (`dp[i][1]`) We take the max of whether to choose or not choose for both when the last value is plus and when the last value is minus.

After we finish iterating, max of `dp[-1]` is the result, meaning we find the maximum number between when the last value is plus and when the last value is minus.

```
class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:
        n = len(nums)   
        dp = [[0,0] for _ in range(n)] # initialize dp
        dp[0][0] = nums[0] # pre-define
        dp[0][1] = 0 # pre-define

        for i in range(1, n): # iterate through nums starting from index 1
            dp[i][0] = max(nums[i] + dp[i-1][1], dp[i-1][0]) # find which value is higher between choosing or not choosing when the last value is plus.
            dp[i][1] = max(-nums[i] + dp[i-1][0], dp[i-1][1]) # find which value is higher between choosing or not choosing when the last value is minus.
        
        return max(dp[-1]) # find the maximum of the last array of dp of whether the last value is plus or minus, this will be our answer.
```

***Solution 2: DFS with Memoization***

**Intuition**
We can combine DFS with memoization to find all the paths and narrow it down as we go.

**Algorithm**
Start a dfs function, it terminates when `i`, the index, reaches the length of nums, or `n` in this case. We also keep track of another variable `p`, which determines whether we add or subtract. Next, similar to solution 1, we either choose (to start or continue the existing alternating subsequence) or not choose (move on to the next element of nums without doing anything). This will give us the answer.
```
class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:
		n = len(nums)   
        @cache
        def dfs(i: int, p: bool) -> int:
            if i>=n:
                return 0 
			
			# if choose
            num = nums[i] if p else -nums[i]
            choose = num + dfs(i+1, not p)

            # if not choose
            not_choose = dfs(i+1, p)
            return max(choose, not_choose)

        return dfs(0, True)
```

**Please consider upvoting if these solutions helped you. Good luck!**
