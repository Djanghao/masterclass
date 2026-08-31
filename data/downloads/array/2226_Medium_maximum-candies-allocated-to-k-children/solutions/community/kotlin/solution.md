# Kotlin binary search solution

**Author:** ashnh
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/1931345/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/1931345/)

---

```
class Solution {
    fun maximumCandies(candies: IntArray, k: Long): Int {
        var (min, max, sum) = Triple(1, Integer.MIN_VALUE, 0L)
        candies.forEach { sum += it.also { if (it > max) max = it } }
        if (sum < k) return 0

        var result = min
        while (max > min) {
            if (canEachChildGetCCandies(result, candies, k)) min = result
            else max = result -1
            result = (min + max + 1) / 2
        }
        return result
    }

    fun canEachChildGetCCandies(c: Int, candies: IntArray, k: Long) =
        candies.fold(0L) { sum, it -> sum + it / c } >= k
}
```