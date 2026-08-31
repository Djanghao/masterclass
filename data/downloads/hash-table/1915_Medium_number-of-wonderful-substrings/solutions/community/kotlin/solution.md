# :: Kotlin :: Bitwise + Sliding Window

**Author:** znxkznxk1030
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090546/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090546/)

---

# Code\r
```\r
class Solution {\r
    fun wonderfulSubstrings(word: String): Long {\r
        val charr = word.toCharArray()\r
        val n = charr.size\r
\r
        var result = 0L\r
        val dp = LongArray(1 shl 11)\r
        var bits = 0\r
\r
        for (i in 0 until n) {\r
            val ch = charr[i].toInt() - 'a'.toInt()\r
            bits = bits xor (1 shl ch)\r
\r
            var ret = dp[bits] + if (bits.countOneBits() <= 1) 1L else 0L\r
\r
            for (j in 0 until 10) {\r
                ret += dp[bits xor (1 shl j)]\r
            }\r
\r
            result += ret\r
            dp[bits] += 1L\r
        }\r
\r
        return result\r
    }\r
}\r
```