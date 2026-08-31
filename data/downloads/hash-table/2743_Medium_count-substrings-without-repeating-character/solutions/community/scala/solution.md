# scala sliding window

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5217504/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5217504/)

---

# Intuition
The problem is asking to find the number of special substrings in a given string. A special substring is a substring that contains at least one character that is not present in the substring to its left. The intuition is to use a sliding window approach to keep track of the characters in the current window and the characters that are not present in the window.

# Approach
The approach is to use a sliding window approach to keep track of the characters in the current window and the characters that are not present in the window. We use a boolean array contains to keep track of the characters that are present in the window. We iterate over the string and for each character, we check if it is present in the window. If it is not present, we increment the count of special substrings. We also update the window by moving the left pointer to the right.

# Complexity
- Time complexity:
$$O(n)$$  because we are iterating over the string once.

- Space complexity:
$$O(1)$$  because we are using a fixed-size boolean array to keep track of the characters in the window.

# Code
```
object Solution {
  def numberOfSpecialSubstrings(s: String): Int = {
    var count = 0
    var left = 0
    val contains = new Array[Boolean](26)
    for (right <- 0 until s.length) {
      val curr = s.charAt(right)
      while (contains(curr - 'a')) {
        contains(s.charAt(left) - 'a') = false
        left += 1
      }
      contains(curr - 'a') = true
      count += right - left + 1
    }
    count
  }
}
```