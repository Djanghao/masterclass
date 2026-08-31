# Kotlin O(n) time O(alphabet) space

**Author:** user1482VR
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/5430528/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/5430528/)

---

# Code
```
class Solution {

    // O(n) time O(alphabet) space
    fun findSubstringInWraproundString(s: String): Int {
        val maxEndingWithLetterSequence = IntArray('z' - 'a' + 1) { 0 }
        var sequence = 1
        for (i in 0..s.length-1) {
            if (i != 0 && isSequence(s[i-1], s[i])) {
                sequence += 1
            } else {
                sequence = 1
            }
            maxEndingWithLetterSequence[s[i]-'a'] = kotlin.math.max(maxEndingWithLetterSequence[s[i]-'a'] ?: 0, sequence)
        }
        return maxEndingWithLetterSequence.sum() 
    }

    private fun isSequence(first: Char, second: Char): Boolean {
        if (first == 'z') {
            return second == 'a'
        }
        return second - first == 1
    }
}
```