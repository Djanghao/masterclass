# kotlin `when` statement

**Author:** wizard12193
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4155130/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4155130/)

---

# Complexity
- Time complexity:O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
 fun numberOfCuts(n: Int) = when {
    n == 1 -> 0
    n % 2 == 0 -> n / 2
    else -> n
}
}
```