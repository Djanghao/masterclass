# Kotlin solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4427502/](https://leetcode.com/problems/buy-two-chocolates/solutions/4427502/)

---

# Complexity

- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code

```
class Solution {
    fun buyChoco(prices: IntArray, money: Int): Int {
        val (min1, min2) = prices.fold(Int.MAX_VALUE to Int.MAX_VALUE) { (l, r), i ->
            when {
                i > r -> l to r
                i > l -> l to i
                else -> i to l
            }
        }

        return if (min1 + min2 > money) money else money - min1 - min2
    }
}
```