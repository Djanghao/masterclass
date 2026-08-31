# 2 approaches of classic sub-array sum

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1054191/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1054191/)

---

```
    fun maxAbsoluteSum(A: IntArray): Int {
        val len = A.size
        
        //1.  kadane's
        var ans = 0
        var (hi, lo) = 0 to 0
        for (x in A) {
            hi = maxOf(x, x + hi)
            lo = minOf(x, x + lo)
            ans = maxOf(hi, -lo, ans)
        }
        return ans
        
        //2.  usual dp
        val maxDp = IntArray(len)
        maxDp[0] = A[0]
        for (i in 1 until len) {
            maxDp[i] = maxOf(A[i], maxDp[i - 1] + A[i])
        }
        val minDp = IntArray(len)
        minDp[0] = A[0]
        for (i in 1 until len) {
            minDp[i] = minOf(A[i], minDp[i - 1] + A[i])
        }
        return maxOf(maxDp.max()!!, -minDp.min()!!)
    }
}
```