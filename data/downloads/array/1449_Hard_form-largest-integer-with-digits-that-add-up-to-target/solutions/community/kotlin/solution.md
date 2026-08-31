# 100% Beats solution

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/6050451/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/6050451/)

---

# Intuition
This problem can be solved using dynamic programming and intuition behing this is we have multiple options for each digit for example: "7772" at index zero we have 1 to 9 options and also its an overlapping problem.

# Approach
### Step-by-Step Breakdown:
##### 1. Iterate Through the Digits:
At each index i, explore all possible values from 1 to 9 that can form a valid number at that position.
For each valid value, determine the best (maximum) result achievable from that point onward.
##### 2. Dynamic Programming Table:

Use a DP array or function dp[i] to store the result for the substring starting at index i.
The result at dp[i] will depend on the maximum valid number that can be formed from index i to the end of the string.
##### 3. Handle Out-of-Bound Integers:

Since the numbers can exceed the range of standard integer types, direct comparison of integers is not feasible.
Instead, use a helper function isGreater(a: String, b: String) to perform string-based integer comparison:
##### 4. Compare lengths of the strings.
If lengths are equal, compare character-by-character.
##### 5. Recursive Relation:

For each index i, compute the maximum valid number by iterating through possible values and comparing results using the isGreater function.
##### 6. Base Case:

If the index reaches the end of the string, return a base value or terminate recursion.

# Complexity
- Time complexity:
O(target*9)

- Space complexity:
O(target)

# Code
```kotlin []
class Solution {
    fun largestNumber(cost: IntArray, target: Int): String {
        return enumerate(cost, target) ?: "0"
    }

    private fun enumerate(cost: IntArray, target: Int): String? {
        val dp = Array<String?>(target + 1) { null }
        for (tar in 0..target) {
            if (tar == 0) dp[tar] = ""
            else {
                var output: String? = null
                for (i in 9 downTo 1) {
                    if (tar - cost[i - 1] >= 0) dp[tar - cost[i - 1]]?.let {
                        if ("$i$it".isGreater(output)) output = "$i$it"
                    }
                }
                dp[tar] = output
            }
        }
        return dp[target]
    }

    private fun String.isGreater(s: String?): Boolean {
        if (s == null) return true
        if (length == s.length) {
            for (i in indices) {
                if (this[i].code < s[i].code) return false
            }
            return true
        } else if (length > s.length) {
            return true
        } else {
            return false
        }
    }
}
```