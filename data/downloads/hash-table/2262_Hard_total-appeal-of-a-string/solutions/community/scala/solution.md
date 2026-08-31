# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/5242604/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/5242604/)

---

```scala
object Solution {
  def appealSum(s: String): Long =
    s.zipWithIndex.foldLeft((0L,Map.empty[Char,Int])){case ((acc,aMap),(c,i)) =>
      lazy val bMap = aMap + (c->i)
      lazy val acc1 = acc + bMap.values.to(List).sorted.reverse.zipWithIndex
        .reverse.foldLeft((0L,-1)){case ((a,prev), (j, k)) =>
          (a + (j - prev) * (k + 1), j)
      }._1
      (acc1, bMap)
    }._1
}
```