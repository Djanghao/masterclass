# scala recursion

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/5211353/](https://leetcode.com/problems/student-attendance-record-ii/solutions/5211353/)

---

```scala
// classify & count combinations with TA <=1 (total 'A') and LL <=2 last 'L'
// there are 2*3=6 good (TA,LL) combinations, transitions between states are defined in newMap
object Solution {
  val INITMAP=Map((0,0) -> 1, (0,1) -> 1, (0,2) -> 0,  (1,0) -> 1, (1,1) -> 0, (1,2) -> 0)
  def add(a: Int, b: Int): Int = (a + b) % 1_000_000_007
  def checkRecord(n: Int, aMap: Map[(Int,Int),Int] = INITMAP): Int =
      lazy val newMap = Map(
        (0,0) ->  Seq((0,0),(0,1),(0,2)),  (0,1) ->  Seq((0,0)),  (0,2) ->  Seq((0,1)),
        (1,0) ->  Seq((0,0),(0,1),(0,2),(1,0),(1,1),(1,2)),  (1,1) ->  Seq((1,0)),  (1,2) ->  Seq((1,1))
      ).view.mapValues(_.foldLeft(0){(a,b) => add(a,aMap(b))}).to(Map)
      if (n==1) aMap.values.reduceLeft(add) else checkRecord(n-1, newMap)
}
```