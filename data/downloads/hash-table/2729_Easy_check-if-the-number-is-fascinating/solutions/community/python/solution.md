# Python Elegant & Short | Counter

**Author:** Kyrylo-Ktl
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622850/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622850/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$


# Code
```
class Solution:
    DIGITS = Counter('123456789')

    def isFascinating(self, n: int) -> bool:
        return Counter(str(n) + str(2 * n) + str(3 * n)) == self.DIGITS

```