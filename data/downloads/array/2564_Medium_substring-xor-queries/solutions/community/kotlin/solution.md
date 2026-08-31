# Expand from each index and try find queried numbers

**Author:** kotlinc
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3212616/](https://leetcode.com/problems/substring-xor-queries/solutions/3212616/)

---

# Intuition
* `val ^ first == second` can be transformed as `val = first ^ second`
* at each index, we try to find numbers begin with that index
* any numbers that are in the queries that were not found before, gets recorded

# Complexity
- Time complexity: $$O(32 n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(Q)$$, where $$Q$$ means the size of $$queries$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  fun substringXorQueries(s: String, queries: Array<IntArray>): Array<IntArray> {
    val N = s.length
    val indices = queries.withIndex().groupBy (
      keySelector = { it.value[0] xor it.value[1] },
      valueTransform = {it.index}
    ).toMutableMap()
    val res = Array(queries.size) { IntArray(2) { -1 } }
    fun helper (value: Int, left: Int, right: Int) {
      (indices.remove(value) ?: return).forEach {
        res[it][0] = left
        res[it][1] = right
      }
    }
    for (i in 0 until N) {
      if (s[i] == '0') {
        helper(0, i, i)
      } else {
        var tmp = 0L
        for (j in i until N) {
          tmp = (tmp shl 1) + (s[j] - '0')
          if (tmp > Int.MAX_VALUE) break
          helper(tmp.toInt(), i, j)
        }
      }
    }
    return res
  }
}
```