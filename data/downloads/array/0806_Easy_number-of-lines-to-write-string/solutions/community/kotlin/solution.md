# 🔥✅✅ Kotlin Solution 📌📌 || with Explanation 👌👌

**Author:** NosaR
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5391920/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5391920/)

---

# Solution

1. **`numberOfLines` function:**
    - Takes the `widths` array and the string `s` as input.
    - Initializes variables:
        - `currentLine`: Keeps track of the current line number (starts at 1).
        - `currentLineWidth`: Tracks the total width of characters written on the current line.
        - `lines`: Keeps track of the total number of lines needed.
2. **Looping through String:**
    - The code iterates through each character (`char`) in the string `s`.
    - It calculates the width of the current character using `widths[char - 'a']`. This leverages the fact that the index in the `widths` array corresponds to the lowercase character minus 'a'.
3. **Checking Line Width:**
    - It checks if adding the current character's width (`charWidth`) to the `currentLineWidth` would exceed the maximum line width (100).
    - If it would exceed, it increments the `lines` counter (new line needed) and resets `currentLineWidth` to 0.
4. **Updating Line Width:**
    - Otherwise, it simply adds the current character's width to `currentLineWidth`.
5. **Returning Result:**
    - After iterating through all characters, the function returns an `IntArray` containing two elements:
        - `lines`: The total number of lines needed to fit the string.
        - `currentLineWidth`: The width of the last line (might be less than 100 if the string ends within a line).

```kotlin
class Solution {
    fun numberOfLines(widths: IntArray, s: String): IntArray {
      var currentLine = 0
      var currentLineWidth = 0
      var lines = 1
      for (char in s) {
        val charWidth = widths[char - 'a']
        if (currentLineWidth + charWidth > 100) {
          lines++
          currentLineWidth = 0
        }
        currentLineWidth += charWidth
      }
      return intArrayOf(lines, currentLineWidth)
    }
}
```