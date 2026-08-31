# Scala backtracking + cache, beats 100%

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/2310751/](https://leetcode.com/problems/factor-combinations/solutions/2310751/)

---

```
import scala.collection.mutable
import scala.util.chaining._
import scala.math._
object Solution {
    val cache = mutable.Map.empty[(Int,Int),List[List[Int]]] 
    def getFactors(n: Int): List[List[Int]] = {
        getFactorsBetween(n, 2, sqrt(n).toInt)
    }
    def getFactorsBetween(n: Int, start: Int, end: Int): List[List[Int]] = {
        cache.get((n,start)) match {
            case Some(cachedResult) => cachedResult
            case _ => 
                (start to end).toList.foldLeft(List.empty[List[Int]]) {
                    case (aggr, num) if n % num == 0 =>
                        (n / num match {
                            // avoid unique check and sorting by adjusting search interval for bigger values
                            case r if r >= num => (getFactorsBetween(r,num,sqrt(r).toInt min r/num) ++ List(List(r))).map(num :: _) 
                            case _ => List()
                        }) ++ aggr
                    case (aggr, _) => aggr
                }.tap(r => cache += ((n,start) -> r))
        }
    }
}
```