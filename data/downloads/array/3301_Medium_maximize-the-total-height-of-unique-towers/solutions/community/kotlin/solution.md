# Simple Kotlin solution, 96 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5962277/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5962277/)

---

# Approach
Sort the heights in descending order, then keep track of the largest available height value as the previous height - 1.

# Complexity
- Time complexity:
$$O(n\\log n)$$ for sorting the array, the subsequent iteration is linear.

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun maximumTotalSum(maximumHeight: IntArray): Long {
        maximumHeight.sortDescending()
        var sum = 0L
        var max = Int.MAX_VALUE
        for (h in maximumHeight) {
            if (h < max) {
                sum += h
                max = h - 1
            } else if (max > 0) sum += max-- else return -1
        }
        return sum
    }
}
```