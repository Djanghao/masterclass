# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/4507144/](https://leetcode.com/problems/largest-multiple-of-three/solutions/4507144/)

---

# Code
```
class Solution {
    fun largestMultipleOfThree(digits: IntArray): String {

        val (sum, ds) = digits.fold(Pair(0,IntArray(10))) { r, d ->
                                    Pair(r.first+d, r.second.also{ r.second[d]++}) }
        generateSequence(sum) { s ->
                                    val i = (if (s % 3 == 1) m1 else m2).find { ds[it] != 0 }
                                    if (i != null) s - i.also{ ds[i]-- } else s
                                }.find{ it%3 == 0 }
        val res = (9 downTo 0).fold(StringBuilder()) { sb, i ->
                                        (0..<ds[i]).forEach { sb.append((i+'0'.code).toChar()) }
                                        sb }.toString()

        return if (res.isNotEmpty() && res.first() == '0') "0" else res
    }

    private val m1 = intArrayOf(1, 4, 7, 2, 5, 8)
    private val m2 = intArrayOf(2, 5, 8, 1, 4, 7)
}
```