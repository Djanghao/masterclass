# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/4524544/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/4524544/)

---

# Code
```
class Solution {
    
    fun sumOfFlooredPairs(nums: IntArray): Int {
        val maxN = nums.max()
        val v = nums.fold(IntArray(N+1)) { a, n -> a.also{ a[n]++ } }.apply {(1..N).forEach { i -> this[i] += this[i-1] }}
        return nums.toSet().fold(0.toLong()){ sum, x ->
            (sum + generateSequence(D(x, x*2-1, 1, 0)) { d ->
                                    D(d.l + x, d.r + x, d.acc + 1, (d.sum + d.acc*(v[d.r]-v[d.l-1]))%MOD)
                   }.find { it.l > maxN }!!.sum.let { (it*(v[x]-v[x-1]))%MOD } ) % MOD }.toInt()
    }

    private val N = 200002
    private val MOD = 1_000_000_007
    private data class D(val l: Int, val r: Int, val acc: Long, val sum: Long)
}
```