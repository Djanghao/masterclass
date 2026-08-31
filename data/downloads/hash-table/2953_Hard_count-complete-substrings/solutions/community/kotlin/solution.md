# Sparse Table Fast Skip Valid Substrings LOL

**Author:** CelonyMire
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-substrings/solutions/4358760/](https://leetcode.com/problems/count-complete-substrings/solutions/4358760/)

---

I completely missed the intuition of 26 different sliding windows, so I instead thought of the following:

Checking for every complete substring that ends at index `i`. We need to know two things:
1. What's the maximum index `j` such that `j <= i` `word[j..i]` contains `k` occurences of `word[i]`?
2. What are the other characters that I will encounter in `word[j..i]`?

With those information, we can perform "fast jumping", where we have to make sure every character included currently has `k` occurences. We can use a sparse table to query the bitmask of characters within a range and precompute the information to jump to the correct position for each charaacter at each index.

We can have separate adjacent complete substrings, so once we find a complete substring, we also consider extending the left range by 1, to see if we can get another complete substring.

```
private class SparseTable(v: String, val k: Int = 25) {
    val n = v.length
    val dp = IntArray(n * (k + 1))

    init {
        for ((i, c) in v.withIndex()) dp[i] = 1 shl (c - 'a')
        for (i in 1..k) for (j in 0..n - (1 shl i)) {
            val a = dp[(i - 1) * n + j]
            val b = dp[(i - 1) * n + j + (1 shl (i - 1))]
            dp[i * n + j] = a or b
        }
    }

    fun queryFast(l: Int, r: Int): Int { // only works if operation is idempotent!
        val p = 31 - (r - l + 1).countLeadingZeroBits()
        val a = dp[p * n + l]
        val b = dp[p * n + (r - (1 shl p) + 1)]
        return a or b
    }
}

private class SparseTable2(v: BooleanArray, val k: Int = 25) {
    val n = v.size
    val dp = v.copyOf(n * (k + 1))

    init {
        for (i in 1..k) for (j in 0..n - (1 shl i)) {
            val a = dp[(i - 1) * n + j]
            val b = dp[(i - 1) * n + j + (1 shl (i - 1))]
            dp[i * n + j] = a and b
        }
    }

    fun queryFast(l: Int, r: Int): Boolean { // only works if operation is idempotent!
        val p = 31 - (r - l + 1).countLeadingZeroBits()
        val a = dp[p * n + l]
        val b = dp[p * n + (r - (1 shl p) + 1)]
        return a and b
    }
}

class Solution {
    fun countCompleteSubstrings(word: String, k: Int): Int {
        val n = word.length
        val pos = Array(26) { ArrayList<Int>() }.also {
            for (i in 0 until n) it[word[i] - 'a'].add(i)
        }
        val pos2 = Array(n + 1) { IntArray(26) }.also {
            for (a in 0 until 26) for (i in k - 1 until pos[a].size) it[pos[a][i] + 1][a] = pos[a][i - k + 1] + 1
            for (i in 0 until n) for (a in 0 until 26) it[i + 1][a] = max(it[i][a], it[i + 1][a])
        }
        val cnt = Array(n + 1) { IntArray(26) }.also {
            for (i in 0 until n) for (a in 0 until 26) it[i + 1][a] = it[i][a] + (if (a == word[i] - 'a') 1 else 0)
        }
        val good = BooleanArray(n).also {
            for (i in 0 until n - 1) if (abs(word[i] - word[i + 1]) <= 2) it[i] = true
        }
        val st = SparseTable(word)
        val st2 = SparseTable2(good)
        var ans = 0
        for (i in 0 until n) {
            var j = i
            var m = 0
            var vis = 0
            outer@ while (j >= 0) {
                m = m or (1 shl (word[j] - 'a'))
                var new_j = j
                while (m > 0) {
                    val u = 31 - m.countLeadingZeroBits()
                    if (vis and (1 shl u) > 0 || pos2[j + 1][u] == 0) break@outer
                    vis = vis or (1 shl u)
                    new_j = min(new_j, pos2[j + 1][u] - 1)
                    val m2 = st.queryFast(new_j, i) and vis.inv()
                    m = m xor (1 shl u) or m2
                }
                for (a in 0 until 26) if (vis and (1 shl a) > 0 && cnt[i + 1][a] - cnt[new_j][a] != k) break@outer
                if (new_j != i && !st2.queryFast(new_j, i - 1)) break
                ans++
                j = new_j - 1
            }
        }
        return ans
    }
}
```