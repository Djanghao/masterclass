# Kotlin easy solution using sliding window - O(m+n) time O(1) space

**Author:** Klemo1997
**Votes:** 7
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/3047119/](https://leetcode.com/problems/permutation-in-string/solutions/3047119/)

---

# Approach
n - size of s1
m - size of s2
Just check if the string frequencies match n-times. We can form the frequency array of current window by decreasing previous window start and increasing current window end. The equal checks on arrays are O(1) since the arrays do have constant lengths

# Complexity
- Time complexity:
$$O(m+n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    fun checkInclusion(s1: String, s2: String): Boolean {
        if (s1.length > s2.length) return false

        val s1Freq = IntArray('z' - 'a' + 1)
        val s2Freq = IntArray('z' - 'a' + 1)

        for (i in s1.indices) {
            s1Freq['z' - s1[i]]++
            s2Freq['z' - s2[i]]++
        }

        for (i in 0 until s2.length - s1.length) {
            if (s1Freq.contentEquals(s2Freq)) return true

            // decrease current start
            s2Freq['z' - s2[i]]--
            // and increase current end
            s2Freq['z' - s2[i+s1.length]]++
        }

        return s1Freq.contentEquals(s2Freq)
    }
}
```