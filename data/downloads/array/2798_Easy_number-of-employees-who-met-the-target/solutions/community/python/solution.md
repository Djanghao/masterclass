# Python Elegant & Short | 1-Line Dunder Magic

**Author:** Kyrylo-Ktl
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3842183/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3842183/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        return sum(map(target.__le__, hours))
```
