# Kotlin one line

**Author:** afeozzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/4292410/](https://leetcode.com/problems/largest-unique-number/solutions/4292410/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun largestUniqueNumber(nums: IntArray): Int =
         nums.groupBy { it }.mapValues { it.value.size }.filterValues { it == 1 }.maxOfOrNull { it.key } ?: -1
    }
}
```