# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/4547018/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/4547018/)

---

# Code
```
class Solution {
    fun goodSubsetofBinaryMatrix(grid: Array<IntArray>): List<Int> {
        val m = mutableMapOf<Int,Int>()
        grid.forEachIndexed { i, row ->
            val x = row.withIndex().sumOf { if (it.value==0) 0 else 1 shl it.index }
            if (x==0) return listOf(i)
            (1..31).find { (x and it) == 0 && m.containsKey(it) }
                   .also { if (it!=null) return listOf(m[it]!!, i)}
            m[x] = i
        }
        return listOf()
    }
}
```