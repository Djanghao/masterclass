# [Kotlin] O(n) Bit Shift + Rolling Hash

**Author:** brentlikestocode
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/5369763/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/5369763/)

---

# Intuition
Bit Shifting

# Complexity
- Time complexity:
O(N) We iterate through the string once

- Space complexity:
O(2^k) We store all possible hashes

# Code
```
class Solution {
    fun hasAllCodes(s: String, k: Int): Boolean {
        if (s.length < k) return false

        val allOne = (1 shl k) - 1 // 2^k - 1
        var hash = 0
        val seen = HashSet<Int>()

        // Initial hash for the first k-length substring
        for (i in 0 until k) {
            hash = (hash shl 1) or (s[i] - '0')
        }
        seen.add(hash)

        // Rolling hash for subsequent substrings
        for (i in k until s.length) {
            hash = ((hash shl 1) and allOne) or (s[i] - '0')
            seen.add(hash)
        }

        return seen.size == (1 shl k)
    }
}
```