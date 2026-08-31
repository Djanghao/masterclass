# Simple, one-pass solution

**Author:** lifran
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/4007617/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/4007617/)

---

# Intuition
A number is divisible by 25 iff it ends in 00, 25, 50, or 75. We need to find which digits we have to delete to make `num` end in any one of those two-digit numbers.


# Approach
In our problem, let e.g num match a pattern like `xxxxx5yyyyyy0yyy`. Then we can delete all the `y` digits to create `xxxxx50`, which represents a number divisible by 25.

To minimize the number of deletions, we search from the back of `num` until we have found any two digits in the correct order to match any of `00`, `25`, `50`, or `75`.

We can easily keep state with two booleans to indicate which relevant digits we have found so far.

# Complexity
- Time complexity:
O(`num.length`)

- Space complexity:
O(`num.length`)

# Kotlin
```
class Solution {
    fun minimumOperations(num: String): Int {
        var found0 = false
        var found5 = false

        for (i in num.lastIndex downTo 0) {
            val d = num[i] - '0'

            when {
                d == 0 && !found0 -> found0 = true
                d == 5 && !found0 && !found5 -> found5 = true
                (d == 0 || d == 5) && found0 -> return num.length - i - 2
                (d == 2 || d == 7) && found5 -> return num.length - i - 2
            }
        }

        return num.length - if (found0) 1 else 0
    }
}
```