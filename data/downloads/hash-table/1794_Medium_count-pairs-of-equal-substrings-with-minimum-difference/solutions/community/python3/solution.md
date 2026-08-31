# Python (Simple Hashmap)

**Author:** rnotappl
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/solutions/4901021/](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/solutions/4901021/)

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
    def countQuadruples(self, s, t):
        dict1, dict2 = {}, {}

        for i,c in enumerate(s):
            if c not in dict1:
                dict1[c] = i  

        for i,c in enumerate(t):
            dict2[c] = i 

        total, min_val = 0, float("inf")

        for k in dict1:
            if k in dict2:
                if dict1[k] - dict2[k] < min_val:
                    min_val = dict1[k]-dict2[k]
                    total = 1 
                elif dict1[k] - dict2[k] == min_val:
                    total += 1 

        return total 
```