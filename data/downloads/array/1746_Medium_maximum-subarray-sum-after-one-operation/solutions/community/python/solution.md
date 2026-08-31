# Python 3 | 2 Method, DP (House Robber) & Prefix Sum + Math | Explanation

**Author:** idontknoooo
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/1479311/](https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/1479311/)

---

### Approach \\#1 Dynamic Programming (House Robber)
- The DP method solution is like a combination of [198. House Robber](https://leetcode.com/problems/house-robber/) and [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
- You have only 1 chance, 2 states (square or not square)
- Traversing the list and dynamically change 2 states to get the maximum result
- Time: `O(N)`, one pass
```
class Solution:
    def maxSumAfterOperation(self, nums: List[int]) -> int:
        non_sq, sq = nums[0], nums[0] ** 2
        ans = max(non_sq, sq)
        for i, num in enumerate(nums[1:], 1):
            sq = max(num*num, non_sq + num * num, sq + num)  # squared
            non_sq = max(num, non_sq + num)                  # not squared
            ans = max(ans, non_sq, sq)
        return ans
```

### Approach \\#2 Prefix Sum, Math
- We are gonna take advantage of Math a bit in this prefix sum approach.
- How do I come up with this solution? Intuition?
	- Prefix sum seems like a natural idea for subarray sum, or I might just have came up with this coincidentally :)
- Say we want to square `nums[i]`, what will happend? 
	- All prefix sum after `i` will be leveled-up, that means the maximum number of `i` will be changed
	- Everything before `i` will stay the same
	- If we can try square each `nums[i]` and keep track of the maximum after this update, then we will get the result
- How to do above effectively?
	- To square any `i` and find the max subarray, there are 3 parts
		- Left side of `i`: We need to track difference between prefix sum of i-1 (`pre[i-1]`) and the lowest prefix sum on the left side of `i` (`pre[min_idx[i-1]]`)
		- Square current value: `nums[i-1] ** 2`, use `i-1` since `len(nums) = len(pre) - 1`
		- Right side of `i`: We need to track difference between the max prefix sum on the right side of i (`pre[max_idx]`) and current prefix sum (`pre[i]`)
- As long as we keep track of the **minimum prefix sum index on the left of `i`** and the **maximum prefix sum index on the right side of `i`**, then we can square each `nums[i]` and compare in `O(N)`
- Time: `O(N)`, two pass
```
class Solution:
    def maxSumAfterOperation(self, nums: List[int]) -> int:
        n = len(nums)    
        pre, min_idx = [0] * (n+1), [0] * (n+1)
        for i, num in enumerate(nums):
            pre[i+1] = pre[i] + num                                           # prefix sum
            min_idx[i+1] = i+1 if pre[min_idx[i]] > pre[i+1] else min_idx[i]  # index with minimum prefix sum before `i`
        ans, max_idx = -sys.maxsize, n
        for i in range(n, 0, -1):
            max_idx = i if pre[max_idx] < pre[i] else max_idx                 # index with maximum prefix sum after (on the right side of) `i`
            ans = max(ans, 
                      max(pre[i-1], pre[i-1] - pre[min_idx[i-1]]) + \\         # left side of current until minimum
                      nums[i-1] ** 2 + \\                                      # square current value
                      pre[max_idx] - pre[i])                                  # right side of current until maximum
        return ans
```