# Kotlin binary search

**Author:** lopestbl
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5379724/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5379724/)

---

# Complexity
- Time complexity: O(n*logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) for the `sortedPrices`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    // O(n*logn)
    fun maximumTastiness(price: IntArray, k: Int): Int {
        // O(n*logn)
        val sortedPrices = price.sorted()

        // O(n)
        fun canGetTastiness(value: Int): Boolean {
            var remaining = k - 1
            var lastPrice = sortedPrices[0]

            var i = 1
            while (i < sortedPrices.size && remaining > 0) {
                if (sortedPrices[i] - lastPrice >= value) {
                    lastPrice = sortedPrices[i]
                    remaining--
                }

                i++
            }

            return remaining == 0
        }

        var left = 0
        var right = sortedPrices.last()

        var maxTastiness = 0

        // O(logn)
        while (left <= right) {
            val middle = (right - left) / 2 + left

            if (canGetTastiness(middle)) {
                maxTastiness = middle
                left = middle + 1
            } else {
                right = middle - 1
            }
        }

        return maxTastiness
    }
}
```