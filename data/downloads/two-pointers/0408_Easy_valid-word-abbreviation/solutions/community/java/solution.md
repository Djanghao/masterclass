# Java | TC: O(abbr) | SC: O(1) | Clean & Concise solution using Two Pointers

**Author:** NarutoBaryonMode
**Votes:** 34
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/1491062/](https://leetcode.com/problems/valid-word-abbreviation/solutions/1491062/)

---

```
/**
 * Time Complexity: O(A)
 *
 * Space Complexity: O(1)
 *
 * A = Length of abbr input string.
 */
class Solution {
    public boolean validWordAbbreviation(String word, String abbr) {
        if (word == null || abbr == null) {
            throw new IllegalArgumentException("Input is null");
        }

        int wLen = word.length();
        int aLen = abbr.length();

        // length of abbreviation cannot be greater than word's length
        if (aLen > wLen) {
            return false;
        }

        if (wLen == 0) {
            return true;
        }

        int i = 0;
        int j = 0;

        while (i < wLen && j < aLen) {
            // It current characters in both word and abbr is same continue checking.
            if (word.charAt(i) == abbr.charAt(j)) {
                i++;
                j++;
                continue;
            }

            // Now current characters in word and abbr do not match. Thus current character
            // in abbr should be a valid starting digit 0 < x <= 9.
            if (abbr.charAt(j) == '0' || !Character.isDigit(abbr.charAt(j))) {
                return false;
            }

            // The num value
            int num = 0;
            while (j < aLen && Character.isDigit(abbr.charAt(j))) {
                num = 10 * num + (abbr.charAt(j) - '0');
                j++;
            }

            // Increment word pinter by num.
            i += num;
        }

        // If both i and j pointers are at end, then we have a valid word abbreviation
        return i == wLen && j == aLen;
    }
}
```