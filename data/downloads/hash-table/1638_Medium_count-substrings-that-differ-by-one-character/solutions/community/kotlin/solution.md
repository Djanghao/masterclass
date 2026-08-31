# Easy, simple Kotlin

**Author:** 1997onurcan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/5121766/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/5121766/)

---

# Complexity
- Time complexity:O(n * m * max(n, m))

# Code
```
class Solution {
    fun countSubstrings(s: String, t: String): Int {
        var count = 0

        // Iterate through every character in s
        for (i in s.indices) {
            // Iterate through every character in t
            for (j in t.indices) {
                var diffCount = 0
                var k = i
                var l = j

                // Compare characters and count differences
                while (k < s.length && l < t.length) {
                    if (s[k] != t[l]) {
                        diffCount++
                    }
                    // If there's more than one difference, break the loop
                    if (diffCount > 1) break

                    // If one difference is allowed, increment count
                    if (diffCount == 1) count++

                    k++
                    l++
                }
            }
        }

        return count
    }
}
```