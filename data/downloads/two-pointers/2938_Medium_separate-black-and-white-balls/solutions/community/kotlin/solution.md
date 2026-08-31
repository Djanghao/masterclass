# Kotlin. Beats 100% (196 ms). Static cache (8-bit chunks)

**Author:** mobdev778
**Votes:** 2
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5915326/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5915326/)

---

![image.png](./images/0.png)

# Code
```kotlin []
class Solution {
    fun minimumSteps(s: String): Long {
        var swaps = 0L
        var white = 0

        var byte = 0
        var bits = 0
        for (i in s.length - 1 downTo 0) {
            byte = byte or ((s[i] - '0') shl bits)
            if (bits++ == 7) {
                swaps += swapCache[byte] + blackCache[byte] * white
                white += whiteCache[byte]
                bits = 0
                byte = 0
            }
        }
        if (bits > 0) swaps += swapCache[byte] + blackCache[byte] * white
        return swaps
    }

    companion object {
        val swapCache = LongArray(256) {
            var n = it
            var swaps = 0L
            var white = 0
            for (i in 0 until 8) {
                if (n and 1 == 1) swaps += white else white++
                n = n shr 1
            }
            swaps
        }
        val blackCache = IntArray(256) { Integer.bitCount(it) }
        val whiteCache = IntArray(256) { 8 - blackCache[it] }
    }
}
```

# Approach

When optimizing the performance of an algorithm, we should always pay attention to the moments when the algorithm starts "riding the same tracks".

In this case, we can group all the bits from the "s" string into 8-bit chunks and see that the counters of swap operations are repeated from chunk to chunk, with the exception that the accumulated number of white balls will need to be added to each swap operation from a new chunk.

We can replace several summations of swaps with white balls from previous chunks with multiplication. According to measurements (Beats 100% of users with Kotlin), the trick with grouping into 8-bit chunks and caching works.

# Alternative approach

1. Simple solution

![image.png](./images/1.png)

```
fun minimumSteps(s: String): Long {
    var swaps = 0L
    var white = 0
    for (i in s.length - 1 downTo 0) {
        if (s[i] == '1') swaps += white else white++
    }
    return swaps
}
```

2. Reducing steps if no white balls left

![{CA93E124-EBEE-4DCA-91F1-63B694745CCF}.png](./images/2.png)

```
class Solution {
    fun minimumSteps(s: String): Long {
        var white = s.length
        for (c in s) white -= c - '0'

        var swap = 0L
        for (c in s) {
            if (c == '1') swap += white else if (--white == 0) break
        }
        return swap
    }
}
```