# Rabin-Karp + DP

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/4769119/](https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/4769119/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I took this as a basis:
**https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/4325890/java-dp-rolling-hash**
Rabin-Karp to compare strings + DP to find the maximum.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n)

# Code
```Kotlin
class Solution {
    fun deleteString(s: String): Int {
        var base = 31
        val n = s.length
        var hash = IntArray(n)
        var pows = IntArray(n)
        pows[0] = 1
        hash[0] = (s[0] - 'a'+1)
        for (i in 1 until n) {
            pows[i] = (pows[i - 1] * base)
            hash[i] = (hash[i - 1] * base + (s[i] - 'a'+1))
        }
        fun Hash(start: Int, end: Int): Int {
            if (start == 0) {
                return hash[end]
            }
            var h = (hash[end] - hash[start - 1] * pows[end - start + 1])
            return h
        }
        fun isEqual(s1: Int, e1: Int, s2: Int, e2: Int): Boolean {
            return Hash(s1, e1) == Hash(s2, e2)
        }
// This is a special case where nothing can be removed from the very beginning - there is no point in DP.
        var ind = false
        for (i in 0 until n/2) {
            if (isEqual(0, i, i+1, i*2+1)) {
                ind = true
                break
            }
        }
        if (!ind) return 1
//
        val maxDeletion = IntArray(n)
        maxDeletion[n - 1] = 1
        for (i in n - 2 downTo 0) {
            maxDeletion[i] = 1
            for (j in i + 1 until n) {
                val len = j - i
                if (j + len - 1 >= n) {
                    break
                }
                if (isEqual(i, j - 1, j, j + len - 1)) {
                    maxDeletion[i] = maxOf(maxDeletion[j] + 1, maxDeletion[i])
                }
            }
        }

        return maxDeletion[0]
    }
}
```