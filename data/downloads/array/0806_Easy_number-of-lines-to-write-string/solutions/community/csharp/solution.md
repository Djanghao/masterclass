# Easy Solution 😎 || 100% faster 💥 || With Explanation ✅

**Author:** akobirswe
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/3733389/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/3733389/)

---

# Approach
The given solution tackles the problem of determining the number of lines needed to write a given string `s` using an array of character widths `widths`.

Here's an overview of the approach:

1. Create an integer array `res` to store the resulting number of lines and the width of the last line.
2. Initialize `lines` and `width` variables to keep track of the current line count and width.
3. Iterate through each character, `c`, in the string `s` using a `foreach` loop.
4. For each character, calculate its width by accessing the corresponding value in the `widths` array using `widths[c - 'a']`.
5. Check if adding the character's width to the current line width exceeds the limit of 100 pixels:
   - If it does, increment the line count (`lines++`) and set `width` to the character's width since it will be the width of the next line.
   - If it doesn't, add the character's width to the current line width (`width += charWidth`).
6. After processing all the characters, assign the line count and the width of the last line to `res[0]` and `res[1]`, respectively.
7. Return the `res` array as the result.

This approach iterates through each character of the string `s` and calculates the line count and width of the last line based on the character widths. It avoids the need for a separate map or lookup table, as it directly accesses the `widths` array using the character's ASCII value. The time complexity of this solution is O(n), where n is the length of the string `s`. The space complexity is O(1) since the `res` array has a fixed size.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int[] numberOfLines(int[] widths, String s) {
        int[] res = new int[2];

        int lines = 1;
        int width = 0;

        for (char c : s.toCharArray()) {
            int charWidth = widths[c - 'a'];
            if (width + charWidth > 100) {
                lines++;
                width = charWidth;
            } else {
                width += charWidth;
            }
        }

        res[0] = lines;
        res[1] = width;

        return res;
    }
}
```