# scala two-liner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/4983459/](https://leetcode.com/problems/match-substring-after-replacement/solutions/4983459/)

---

```
object Solution {
  def matchReplacement(s: String, sub: String, mappings: Array[Array[Char]]): Boolean = {
    lazy val aMap = mappings.toSet.groupMap(_.last)(_.head)
    s.sliding(sub.size,1)
    .exists( _.iterator.zip(sub).forall{ case (chw,chs) =>
        chw == chs || aMap.getOrElse(chw,Set()).contains(chs)
    })
  }
}
```