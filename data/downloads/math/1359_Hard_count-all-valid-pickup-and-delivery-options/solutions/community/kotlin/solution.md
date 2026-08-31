# Kotlin solution

**Author:** shohruh_genius
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4024434/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4024434/)

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun countOrders(n: Int) = Array(n + 1) { (IntArray(n + 1)) }.let { dp ->
        val mod = 1_000_000_007
        dp[0][0] = 1
        fun solve(p: Int, d: Int): Int =
            dp[p][d].takeIf { it != 0 } ?: ((if (d == 0) p.toLong() * solve(p - 1, 1)
            else if (p == 0) d.toLong() * solve(p, d - 1)
            else p.toLong() * solve(p - 1, d + 1) + d.toLong() * solve(p, d - 1)) % mod).toInt()
                .also { dp[p][d] = it }
        solve(n, 0)
    }
}
```