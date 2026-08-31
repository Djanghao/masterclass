# scala solution (tail recursion)

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/1958313/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/1958313/)

---

```
    def waysToBuyPensPencils(total: Int, cost1: Int, cost2: Int): Long = {
        def loop(buyPen: Int, result: Long): Long = {
          val sumAfterBuingPen = total - (cost1 * buyPen)
          val amountPencile = (sumAfterBuingPen / cost2) + 1
          if(sumAfterBuingPen < 0) result
          else loop(buyPen + 1, result + amountPencile)
        }

        loop(0, 0)
    }
```