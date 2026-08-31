# Kotlin step by step - Two Pointers and CharArray

**Author:** MohiFayden
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/5338916/](https://leetcode.com/problems/reverse-only-letters/solutions/5338916/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```

class Solution {
    fun reverseOnlyLetters(s: String): String {
        // Change the string to char array to reverse in place
        // Set two pointers at the left and right side of the strings
        // Start iterating over the string until two pointers met
        // If both left and right side chars are english letters, swap them in place
        // Otherwise, increment or decrement the left and right side based on the non letter char

        val ans = s.toCharArray()
        var left = 0
        var right = s.length - 1

        while (left < right) {
            when {
                !ans[left].isLetter() -> left++
                !ans[right].isLetter() -> right--
                else -> {
                    val temp = ans[left]
                    ans[left] = ans[right]
                    ans[right] = temp
                    left++
                    right--
                }
            }
        }

        return ans.concatToString()
    }
}
```