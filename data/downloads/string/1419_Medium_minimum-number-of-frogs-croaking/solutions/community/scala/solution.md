# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/5528485/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/5528485/)

---

```scala
object Solution {
  lazy val incMap = Map('c' -> 1, 'k' -> -1).withDefaultValue(0)
  lazy val cMap = "croak".zipWithIndex.toMap
  lazy val emptyMap = Map.empty[Int,Int].withDefaultValue(0) +(-1 -> Int.MaxValue)
  def minNumberOfFrogs(croakOfFrogs: String): Int =
    lazy val (mx,_,xMap) = croakOfFrogs.foldLeft((0,0,emptyMap)){case ((mx,depth,aMap),c) =>
      lazy val aMap1 = aMap + (cMap(c) -> (1+(aMap(cMap(c))) min aMap(cMap(c)-1)))
      lazy val depth1 = depth + incMap(c)
      lazy val mx1 = depth1 max mx
      (mx1, depth1, aMap1)
    }
    if(xMap(cMap("croak".last)) * "croak".length == croakOfFrogs.length) mx else -1
}
```