# Kotlin Dynamic Programming Solutions O(n) Time, O(1) Space

**Author:** jschnall
**Votes:** 2
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4333782/](https://leetcode.com/problems/knight-dialer/solutions/4333782/)

---

# Approach
Create a table of the number of ways to build a number of lengths 1 to n, ending in each digit (0 to 9). Return the sum of the final column.

The table should store 10 * n numbers, so additional space required is $$O(n)$$. The number of iterations to build it are also 10 *n, summing the final column is only $$O(1)$$, so the runtime is also $$O(n)$$.

See below for an optimized version using only $$O(1)$$ space.



# Code
```
class Solution {
    val MODULO = 1e9 + 7L
    fun knightDialer(n: Int): Int {
        var dp = Array<LongArray>(10) { LongArray(n) { 0 } }
    
        for (j in 0 until 10) {
            dp[j][0] = 1
        }

        for (i in 1 until n) {
            for (j in 0 until 10) {
                val nums = nextNums(j)
                nums.forEach { num ->
                    dp[num][i] += (dp[j][i - 1] % MODULO).toLong()
                }
            }
        }
        
        return (dp.map { it[n-1] }.sum() % MODULO).toInt()
    }

    fun nextNums(startNum: Int): IntArray {
        return when (startNum) {
            1 -> intArrayOf(8, 6)
            2 -> intArrayOf(7, 9)
            3 -> intArrayOf(4, 8)
            4 -> intArrayOf(3, 9, 0)
            5 -> intArrayOf()
            6 -> intArrayOf(1, 7, 0)
            7 -> intArrayOf(6, 2)
            8 -> intArrayOf(1, 3)
            9 -> intArrayOf(4, 2)
            else -> intArrayOf(4, 6)
        }
    }
}
```

Some optimizations. Now only keep the results of the most recent iteration. Store nextNums in an array. This should eliminate the overhead of continually creating new arrays.

```
class Solution {
    val MODULO = (1e9 + 7).toLong()
    
    val nextNums = arrayOf<IntArray>(
        intArrayOf(4, 6),
        intArrayOf(8, 6),
        intArrayOf(7, 9),
        intArrayOf(4, 8),
        intArrayOf(3, 9, 0),
        intArrayOf(),
        intArrayOf(1, 7, 0),
        intArrayOf(6, 2),
        intArrayOf(1, 3),
        intArrayOf(4, 2)
    )
    
    fun knightDialer(n: Int): Int {
        var dp = LongArray(10) { 1 }
    
        for (i in 1 until n) {
            val newDp = LongArray(10)
            for (j in 0 until 10) {
                nextNums[j].forEach { num ->
                    newDp[num] += dp[j] % MODULO
                }
            }
            dp = newDp
        }

        return (dp.sum() % MODULO).toInt()
    }
}
```