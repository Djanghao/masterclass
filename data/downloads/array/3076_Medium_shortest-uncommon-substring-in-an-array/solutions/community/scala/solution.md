# 8 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4974637/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4974637/)

---

```
object Solution {
  import math.Ordering
  import collection.immutable.TreeSet
  def shortestSubstrings(arr: Array[String]): Array[String] = {
    lazy val subStrs = arr.iterator.map{ s => TreeSet.from(
        (1 to s.length).flatMap{ l =>s.sliding(l)}
      )(math.Ordering[(Int, String)].on(x => (x.length, x)))
    }
    lazy val aMap = (arr.indices zip subStrs).to(Map)
    arr.indices.map{i => aMap.iterator.foldLeft(aMap(i)){case (rem,(k,v)) =>
        if(k==i) rem else rem -- v
    }}.map(_.headOption.getOrElse("")).to(Array)
  }
}

```