# Greedily change the earlier substring

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/1361602/](https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/1361602/)

---

```
    fun maximumNumber(num: String, change: IntArray): String {
        val A = num.map { it - '0' }.toMutableList()
        for ((i, x) in A.withIndex()) {
            if (change[x] > x) {
                var j = i
                while (j < A.size && change[A[j]] >= A[j]) {
                    A[j] = change[A[j++]]
                }
                break
            }
        }
        return A.joinToString("")
    }
```