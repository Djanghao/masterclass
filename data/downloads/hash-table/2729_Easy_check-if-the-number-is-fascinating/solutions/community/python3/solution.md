# easy python code Beats 100% in Memory

**Author:** hakkiot
**Votes:** 17
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3623681/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3623681/)

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
    def isFascinating(self, n: int) -> bool:
        def pan(num):
            if sorted(list(num))==["1","2","3","4","5","6","7","8","9"]:
                return(True)
            else:
                return False
        n=str(n)+str(n*2)+str(n*3)
        return pan(n)
```