# Python (Simple Maths)

**Author:** rnotappl
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-iii/solutions/5037346/](https://leetcode.com/problems/strobogrammatic-number-iii/solutions/5037346/)

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
class Solution(object):
    def strobogrammaticInRange(self, low, high):
        def dfs(n):
            if n == 1:
                return ["0","1","8"]

            if n == 2:
                return ["00","11","88","69","96"]

            ans = []

            for i in dfs(n-2):
                ans.append("0" + i + "0")
                ans.append("1" + i + "1")
                ans.append("8" + i + "8")
                ans.append("6" + i + "9")
                ans.append("9" + i + "6")

            return ans

        result = []

        for i in range(len(low),len(high)+1):
            result += dfs(i)

        return len([i for i in result if int(low) <= int(i) <= int(high) and str(int(i)) == i])
```