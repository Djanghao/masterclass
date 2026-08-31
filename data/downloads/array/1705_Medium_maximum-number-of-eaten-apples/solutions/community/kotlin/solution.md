# MInHeap of <Expiry, Apples>

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/988386/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/988386/)

---

```
    fun eatenApples(apples: IntArray, days: IntArray): Int {
        val len = apples.size
        val minHeap = PriorityQueue<IntArray>() { a: IntArray, b: IntArray -> a[0] - b[0] } // expiry, apples
        var ans = 0
        val maxDayUntilWeCanEatApple = 4 * 10000 + 1
        for (t in 0 until maxDayUntilWeCanEatApple) {
            if (t < len) { // if some apples are yet to be discovered, add that to minHeap
                val expiry = t + days[t] - 1
                minHeap.add(intArrayOf(expiry, apples[t]))
            }
            while (minHeap.isNotEmpty() && minHeap.peek()[0] < t) { // remove expired apples
                minHeap.poll()
            }
            if (minHeap.isNotEmpty()) {
                ans += 1 // eat one apple on day 't'
                val (exp, remainingApple) = minHeap.poll()
                if (remainingApple > 1) { // if apples are fully eaten, don't add them back
                    minHeap.add(intArrayOf(exp, remainingApple - 1))
                }
            }
        }
        return ans
    }
```