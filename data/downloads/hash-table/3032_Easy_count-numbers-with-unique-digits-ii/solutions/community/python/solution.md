# ✅ Solved using set structure

**Author:** leetcode-chill
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5594360/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5594360/)

---

# Complexity
- Time complexity:$$O(n)$$, where: $$n = a + b$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def numberCount(self, a: int, b: int) -> int:
        def isUnique(n):
            n_str = str(n)
            n_set = set(n_str)
            return len(n_set) == len(n_str)
        
        count = 0
        for n in range(a, b + 1):
            if isUnique(n):
                count += 1

        return count

```