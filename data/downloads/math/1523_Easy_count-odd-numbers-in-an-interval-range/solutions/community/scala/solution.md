# Scala 1-line solution

**Author:** minato_yukina
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/1807458/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/1807458/)

---

```
object Solution {
    def countOdds(low: Int, high: Int): Int = (high + high % 2 - low + low % 2 + 1) / 2
}
```
This formula is equivalent to `(high - low + 1) / 2 + (low % 2 + high % 2) / 2`.  `high - low + 1` is the number of integers between `low` & `high` inclusively.

If both `low` & `high` are even, the answer is `(high - low + 1) / 2`, and `(low % 2 + high % 2) / 2 = 0`.

If both are odd, the answer is `(high - low + 1) / 2 + 1`, and `(low % 2 + high % 2) / 2 = 1`.

If only one of them is odd, the answer is `(high - low + 1) / 2`, and `(low % 2 + high % 2) / 2 = 0`.