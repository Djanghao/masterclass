# 5 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4974728/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4974728/)

---

```
object Solution {
  def minimumLevels(possible: Array[Int]): Int = {
    lazy val pfx = possible.to(List).map(_ * 4 - 2)
      .foldLeft(List(0)){case (l,a) => (l.head + a) +: l }
    lazy val danCh = pfx.reverse.zipWithIndex.drop(1)
      .dropWhile(_._1 <= pfx.head / 2).headOption.map(_._2).getOrElse(-1)
    if(danCh == possible.size) -1 else danCh
  }
}
```