# scala code with detailed comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/4395245/](https://leetcode.com/problems/one-edit-distance/solutions/4395245/)

---

# Approach
The loop iterates up to the length of the shorter string, checking for the first difference.

If a difference is found, the function checks if the rest of the strings match based on the edit type (replacement or insertion).

The final check outside the loop handles the case where the only difference is an extra character at the end of the longer string.

# Complexity
- Time complexity:
 $$O(n)$$

- Space complexity:
 $$O(1)$$

# Code
```
object Solution {
  def isOneEditDistance(s: String, t: String): Boolean = {
    // Ensure s is the shorter string
    if (s.length > t.length) return isOneEditDistance(t, s)

    // Check for length difference greater than 1
    if (t.length - s.length > 1) return false

    // Iterate through the strings to find the first differing character
    for (i <- 0 until s.length) {
      if (s(i) != t(i)) {
        // Check for replacement case
        if (s.length == t.length) return s.substring(i + 1) == t.substring(i + 1)

        // Check for insertion case
        return s.substring(i) == t.substring(i + 1)
      }
    }

    // Check if the difference is at the end (insertion case)
    s.length + 1 == t.length
  }
}

```