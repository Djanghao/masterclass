# python 10 lines

**Author:** her0e1c1
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/solutions/5973198/](https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/solutions/5973198/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

There are 3 choices:

1. do not take the i-th number
2. take the i-th number into the set `A`
3. take the i-th number into the set `B`

Count 1 If the gcd value of A equals to that of B

# Complexity
- Time complexity:
  - O(NM^2)
    - N is the length of `nums`
    - M is the max value of `nums[i]`

# Code
```python3 []
class Solution:
    def subsequencePairCount(self, nums: List[int]) -> int:
        @cache
        def dfs(i, a, b):
            if i == len(nums):
                return 1 if a == b else 0
            return (
                dfs(i + 1, a, b) +  # do not take 
                dfs(i + 1, gcd(a, nums[i]), b) +  # take into A
                dfs(i + 1, a, gcd(b, nums[i]))  # take into B
            ) % (10 ** 9 + 7)
        return dfs(0, 0, 0) - 1  # exclude the one case to take nothing
```

# Reference

This is a similar problem. https://leetcode.com/problems/tallest-billboard/description/
