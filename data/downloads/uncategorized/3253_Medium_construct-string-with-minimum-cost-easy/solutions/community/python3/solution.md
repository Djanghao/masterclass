# [Python3] Simple DP

**Author:** drknzz
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost-easy/solutions/5636305/](https://leetcode.com/problems/construct-string-with-minimum-cost-easy/solutions/5636305/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

##### where n = len(**target**), m = sum of lengths of **words**

# Code
```
class Solution:
    def minimumCost(self, target: str, words: List[str], costs: List[int]) -> int:
        n = len(target)
        dp = [0] + [inf] * n
        for i in range(n):
            for w, c in zip(words, costs):
                if target[i:i+len(w)] == w:
                    dp[i+len(w)] = min(dp[i+len(w)], dp[i] + c)
        return dp[-1] if dp[-1] != inf else -1

```