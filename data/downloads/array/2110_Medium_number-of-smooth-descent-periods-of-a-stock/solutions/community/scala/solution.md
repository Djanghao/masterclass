# Tail-recursive scala solution (beats 100% by memory)

**Author:** MaxPsm
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/5812691/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/5812691/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def getDescentPeriods(prices: Array[Int]): Long = {

    def go(prices: Array[Int], prevElem: Int, currentSubArrayCount: Int, res: Long): Long = {
      (prices, prevElem) match {
        case (ps, _) if ps.isEmpty =>
          if (currentSubArrayCount > 1) res + calculateSubArray(currentSubArrayCount) else res + 1
        case (ps, prev) if prev - ps.head == 1 => go(prices.tail, prices.head, currentSubArrayCount + 1, res)
        case _ => go(prices.tail, prices.head, 1, res + calculateSubArray(currentSubArrayCount))
      }
    }

    def calculateSubArray(count: Long): Long = {
      (1L to count).sum
    }

    go(prices, -1, 0, 0)

  }
}
```