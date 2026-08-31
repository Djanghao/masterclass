# Kotlin: O(26*n + 26*m) time and O(26*n) space with prefixSum

**Author:** kotlinvim
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/1105092/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/1105092/)

---

	fun canMakePaliQueries(s: String, queries: Array<IntArray>): BooleanArray {
        val prefixSum = Array(s.length + 1) { IntArray(26) }
        for (i in 1..s.length) {
            for (j in 0..25) prefixSum[i][j]  = prefixSum[i - 1][j]
            prefixSum[i][s[i - 1] - 'a']++
        }
        val res = BooleanArray(queries.size)
        for (i in 0..queries.size - 1) {
            val (start, end, k) = queries[i]
            var odds = 0
            for (j in 0..25) odds += (prefixSum[end + 1][j] - prefixSum[start][j]) % 2
            res[i] = odds / 2 <= k
        }
        return res
    }