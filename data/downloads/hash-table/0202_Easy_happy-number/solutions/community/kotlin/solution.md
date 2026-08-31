# Recursive Kotlin solution

**Author:** naXa777
**Votes:** 4
**Link:** [https://leetcode.com/problems/happy-number/solutions/4859286/](https://leetcode.com/problems/happy-number/solutions/4859286/)

---

# Approach

Recursion.

Base cases:

1. `n == 1` -> The number is happy.
2. `n == 4` -> If a number is not happy, it will eventually fall into a cycle that includes the number 4. This is a key observation utilized in my code which helps to terminate the recursion.

Wiki: [Happy number](https://en.wikipedia.org/wiki/Happy_number).

# Complexity

Difficult to categorize precisely in standard Big-O notation due to the unique behavior of the happy number sequences

# Code

```kt
class Solution {
    fun isHappy(n: Int): Boolean {
        return when (n) {
            1 -> true
            4 -> false
            else -> isHappy(nextInt(n))
        }
    }

    private fun nextInt(n: Int): Int {
        var sum = 0
        var n = n
        while (n > 0) {
            val digit = n % 10
            sum += digit * digit
            n /= 10
        }
        return sum
    }
}
```