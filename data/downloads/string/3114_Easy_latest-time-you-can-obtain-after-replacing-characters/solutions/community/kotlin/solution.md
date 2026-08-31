# Easy Clean Kotlin Solution - Beats 96.34% Runtime & 91.48% Memory

**Author:** timode-6
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5154257/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5154257/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
## To solve this problem, we can follow these steps:

1. ### Iterate over each character in the string s.
2. ### For each character, check if it is a question mark ("?").
3. ### If it is a question mark, determine the possible valid digits + based on the position in the string:
+ #### For the first digit (hours tens place), it can be between '0' and '1' (inclusive).
+ #### For the second digit (hours ones place), it can be between '0' and '9' (inclusive) if the first digit is '0', or between '0' and '3' (inclusive) if the first digit is '1'.
+ #### For the third digit (minutes tens place), it can be between '0' and '5' (inclusive).
+ #### For the fourth digit (minutes ones place), it can be between '0' and '9' (inclusive).
4. ### Replace the question mark with the maximum valid digit.
5. ### Return the modified string.

# Complexity
- Time complexity: ***O(1)***
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: ***O(1)***
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun findLatestTime(s: String): String {
        val chars = s.toCharArray()
        if (chars[0] == '?') {
            if (chars[1] != '?' && chars[1] > '3') {
                chars[0] = '0'
            } else {
                chars[0] = if (chars[1] == '?' || chars[1] <= '1') '1' else '0'
            }
        }
        if (chars[1] == '?') {
            chars[1] = if (chars[0] == '1') '1' else '9'
        }
        if (chars[3] == '?') {
            chars[3] = '5'
        }
        if (chars[4] == '?') {
            chars[4] = '9'
        }
        return String(chars)
    }
}
```