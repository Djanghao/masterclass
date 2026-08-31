# Scala 3 liner (actually 1 liner)

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/5292889/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/5292889/)

---

# Intuition
Let `pr` and `pe` be the cost minimum cost to reach the previous regular and express stops respectively and `r` and `e` be the cost to the next stop using regular and express routes.

Then, `next_pr = (pr + r) min (pe + e)` since we can take regular route OR take express route and for free switch to the regular station

and `next_pe = (pr + r + cost) min (pe + e)` since we can pay the cost to transfer from the regular stop or just take the express route


# Code
```
object Solution {
    def minimumCosts(regular: Array[Int], express: Array[Int], expressCost: Int): Array[Long] =
        regular.zip(express).scanLeft((0L, expressCost.toLong))({
            case ((pr, pe), (r, e)) => ((pr + r) min (pe + e), (pr + r + expressCost) min (pe + e))
        }).drop(1).map(_ min _)
}
```