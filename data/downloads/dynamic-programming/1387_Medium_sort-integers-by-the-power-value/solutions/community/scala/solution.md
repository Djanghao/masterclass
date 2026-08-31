# Scala functional approach - appreciate any improvements!

**Author:** ooggnn123
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/1049620/](https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/1049620/)

---

```
object Solution {
  def stepsToZero(num: Int, memo: Map[Int, Int]): Map[Int, Int] = {
    if (memo.contains(num))
      memo
    else if (num % 2 == 0)
      memo + (num -> (stepsToZero(num / 2, memo)(num / 2) + 1))
    else
      memo + (num -> (stepsToZero(num * 3 + 1, memo)(num * 3 + 1) + 1))
  }

  def getKth(lo: Int, hi: Int, k: Int): Int = {
    val memoResult = (hi to lo by -1)
      .foldLeft(Map[Int, Int](1 -> 0))({ case (memo: Map[Int, Int], num: Int) => stepsToZero(num, memo) })

    (hi to lo by -1)
      .map(num => (num, memoResult(num)))
      .sortBy(x => (x._2, x._1))
      .toList(k-1)
      ._1
  }
}
```

I want to avoid the foldLeft followed by the map - how can the separate foldLeft and map function calls be integrated? Interested in understanding how to improve this.
