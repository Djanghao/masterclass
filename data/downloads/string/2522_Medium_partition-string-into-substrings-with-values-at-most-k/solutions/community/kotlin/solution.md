# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/4503341/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/4503341/)

---

# Code
```
class Solution {
    fun minimumPartition(s: String, k: Int): Int =
        s.fold(Pair(0.toLong(),1)) { p, c ->
            if (p.second == -1) p
            else {
                val d = (c.code - '0'.code).toLong()
                val n = p.first * 10 + d
                Pair(if (n > k) d else n,
                     if (n > k) if (d > k) -1 else p.second + 1 else p.second)
            }
        }.second
}
```