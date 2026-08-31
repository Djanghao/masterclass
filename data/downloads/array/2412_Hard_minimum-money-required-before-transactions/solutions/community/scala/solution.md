# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/5318276/](https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/5318276/)

---

```scala
object Solution {
  def minimumMoney(transactions: Array[Array[Int]]): Long =
    lazy val (neg,pos) = transactions.toList.map(_.toList)
      .partition(l => l.head > l.last)
    List(neg.sortBy(_.last), pos.maxByOption(_.head)).flatten
      .scanLeft((0L,0L)){ case((candidate,deficiency), l) =>
        // lazy val (cost,cashback) = l.head -> l.last
        // (b+cost, b+cost-cashback)
        (deficiency + l.head, deficiency + l.head - l.last)
      }.map(_._1).max
}
```