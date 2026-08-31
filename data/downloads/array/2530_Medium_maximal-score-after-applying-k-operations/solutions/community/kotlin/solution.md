# Kotlin. Beats 100% (552 ms). PQ + static cache

**Author:** mobdev778
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5912615/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5912615/)

---

![image.png](./images/0.png)

# Code
```kotlin []
class Solution {
    fun maxKelements(nums: IntArray, k: Int): Long {
        val pq = PriorityQueue(IntComparator)
        for (n in nums) pq.offer(n)

        var score = 0L
        for (i in 0 until k) {
            val n = pq.poll()
            score += n
            when {
                n < cache.size -> pq.offer(cache[n])
                else -> pq.offer((n + 2) / 3)
            }
        }
        return score
    }

    object IntComparator: Comparator<Int> {
        override fun compare(a: Int, b: Int) = b - a
    }

    companion object {
        val cache = IntArray(10_000)
        init {
            var i = 1
            for (c in 1..3333) {
                repeat(3) { cache[i++] = c }
            }
        }
    }
}
```

# Approach

Our goal is to avoid a situation where the algorithm "rides on the same rails".

This situation can arise when calling the "ceil" function, when we have to get the same result many times for the same parameters.

We can make a pre-calculated cache for the first 10_000 elements and not perform a heavy division operation if the value has already been calculated in the cache.

The rest of the solution is made according to the hint from the problem - we use PQ to sort numbers in descending order. We go through PQ K times, each time choosing the largest number. We perform the "ceil" operation for the selected number and return it back to PQ.

# Alternative approach

![image.png](./images/1.png)

```
class Solution {
    fun maxKelements(nums: IntArray, k: Int): Long {
        val pq = PriorityQueue(IntComparator)
        for (n in nums) pq.offer(n)

        var score = 0L
        for (i in 0 until k) {
            val n = pq.poll()
            score += n
            when {
                n < cache.size -> pq.offer(cache[n])
                else -> pq.offer((n + 2) / 3)
            }
        }
        return score
    }

    object IntComparator: Comparator<Int> {
        override fun compare(a: Int, b: Int) = b - a
    }

    companion object {
        val cache = IntArray(1000)
        init {
            var i = 1
            for (c in 1..333) {
                cache[i++] = c
                cache[i++] = c
                cache[i++] = c
            }
        }
    }
}
```
