# Python 3 ||| 5 lines, Bisect  || T/S: 97% / 36%

**Author:** Spaulding_
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/5530618/](https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/5530618/)

---

Here's the plan:

1. We initialize an array `dp` with the last element of `nums`. We use `dp` to keep track of the latest element in each increasing list.
2. We iterate through the reversed list `nums`.

3. If an integer `n` in `nums` is greater than all elements in `dp`, we start a new list by appending `n` to  `dp`; if not, we use `bisect` to determine the optimum list to update with `n`.

```
class Solution:
    def minOperations(self, nums: List[int]) -> int:

        dp = [nums.pop()]

        for n in reversed(nums):

            if n >= dp[-1]: dp.append(n)
            
            else: dp[bisect_right(dp, n)] = n

        return len(dp)
```

[https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/submissions/1332272296/](https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/submissions/1332272296/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.
