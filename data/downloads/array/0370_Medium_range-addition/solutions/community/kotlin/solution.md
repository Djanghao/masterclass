# Updating freq's in Linear time

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-addition/solutions/856884/](https://leetcode.com/problems/range-addition/solutions/856884/)

---

```
    fun getModifiedArray(length: Int, updates: Array<IntArray>): IntArray {
        val N = length
        val result = IntArray(N)
        for ((s, e, inc) in updates) {
            result[s] += inc
            if (e < N - 1) result[e + 1] -= inc
        }
        for (i in 1 until N)
            result[i] += result[i - 1]
        
        return result
    }
```

Solve similar other LC problems :
- https://leetcode.com/problems/corporate-flight-bookings/
- https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/