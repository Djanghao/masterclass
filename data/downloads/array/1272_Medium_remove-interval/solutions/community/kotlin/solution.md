# Clean kotlin solution

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-interval/solutions/937423/](https://leetcode.com/problems/remove-interval/solutions/937423/)

---

Not much fun solving this, just a mechanical way of handling cases.
```
    fun removeInterval(A: Array<IntArray>, toBeRemoved: IntArray): List<List<Int>> {
        val result: MutableList<List<Int>> = ArrayList()
        val (x, y) = toBeRemoved
        for ((a, b) in A) {
            if (a < x && b < x) {
                result.add(listOf(a, b))
            } else if (a in x..y && b in x..y) {
                continue
            } else if (a < x && b in x..y) {
                result.add(listOf(a, x))
            } else if (a in x..y && b > y) {
                result.add(listOf(y, b))
            } else if (a > x && b > x) {
                result.add(listOf(a, b))
            } else if (x in a..b && y in a..b) {
                result.add(listOf(a, x))
                result.add(listOf(y, b))
            } 
        }
        return result
    }
```