# Recursion || Kotlin || Beats 100%

**Author:** Max-Sir
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/6031569/](https://leetcode.com/problems/integer-replacement/solutions/6031569/)

---

# Intuition
Separate all task to subtasks

# Approach
simply using the recursion

# Complexity
- Time complexity:
O(log n)

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {
    fun integerReplacement(n: Int): Int {
        return integerReplacementTailRec(n.toLong(), 0) // Start with steps = 0
    }

    private tailrec fun integerReplacementTailRec(current: Long, steps: Int): Int {
        return when {
            current == 1L -> steps // Base case: when current is reduced to 1
            current % 2 == 0L -> integerReplacementTailRec(current / 2, steps + 1) // If even, halve it
            current == 3L -> steps + 2 // Special case for 3: takes exactly 2 steps
            (current + 1) % 4 == 0L -> integerReplacementTailRec(current + 1, steps + 1) // Prefer increment if (n + 1) % 4 == 0L
            else -> integerReplacementTailRec(current - 1, steps + 1) // Otherwise, decrement
        }
    }
}

```