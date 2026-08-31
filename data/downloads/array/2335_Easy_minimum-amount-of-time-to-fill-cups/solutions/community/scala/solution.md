# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/2292353/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/2292353/)

---

```

  def fillCups(amount: Array[Int]): Int =
    (amount.sum +  1 ) / 2 max amount.max
```