# Python (Simple Maths)

**Author:** rnotappl
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-concatenated-strings/solutions/5015965/](https://leetcode.com/problems/split-concatenated-strings/solutions/5015965/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def splitLoopedString(self, strs):
        strs = [max(x,x[::-1]) for x in strs]

        ans = ""

        for i in range(len(strs)):
            rest = "".join(strs[i+1:]+strs[:i])
            for k in range(len(strs[i])):
                ans = max(ans,strs[i][k:] + rest + strs[i][:k])
                ans = max(ans,strs[i][::-1][k:] + rest + strs[i][::-1][:k])

        return ans 
```