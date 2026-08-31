# Kotlin. Beats 100% (4 ms). DFS (hash codes + static array)

**Author:** mobdev778
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5945967/](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5945967/)

---

![image.png](./images/0.png)

# Code
```kotlin []
class Solution {
    fun maxUniqueSplit(s: String): Int {
        val codes = IntArray(s.length) { s[it].code }
        return dfs(codes, 0, 0, 0)
    }

    private fun dfs(codes: IntArray, substrings: Int, i: Int, hash: Int): Int {
        if (i == codes.size) return substrings

        val newHash = hash * 31 + codes[i]
        var result = dfs(codes, substrings, i + 1, newHash)
        if (!contains(newHash, substrings)) {
            hashes[substrings] = newHash
            result = Math.max(result, dfs(codes, substrings + 1, i + 1, 0))
        }
        return result
    }

    inline fun contains(newHash: Int, substrings: Int): Boolean {
        for (i in 0 until substrings) if (newHash == hashes[i]) return true
        return false
    }

    companion object {
        val hashes = IntArray(16)
    }
}
```

# Approach

The approach is quite simple - you can count substrings using a hash set of substrings, but this will involve too much overhead - create a "substring" object, place it in the hash set, calculate the hash code, then delete it from the hash set.

A more advantageous option in terms of speed is when we immediately convert all the characters into one IntArray, by which we calculate the hash code of our string.

Since the length of the string does not exceed 16, the probability of a possible hash collision is not very high (although it is not equal to 0).