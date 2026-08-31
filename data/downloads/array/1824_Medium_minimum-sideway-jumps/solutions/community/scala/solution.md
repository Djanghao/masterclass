# scala recursive solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/1621601/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/1621601/)

---


```scala
/**
  Keep map of costs for each line
 */
object Solution {
  def minSideJumps(obstacles: Array[Int]): Int = {
    def minSideJumpsImpl(n: Int, p:Map[Int,Option[Int]]): Int = {    
      lazy val minVal = p.filterNot{case (k,v) => k==obstacles(n)}
        .values.flatten.min
      lazy val obstacle=obstacles(n)
      lazy val jumpBack = p.map{case (k,v) => k -> v.orElse(Some(minVal+1))}
      if(n==obstacles.size) p.values.flatten.min
      else if(obstacle==0) minSideJumpsImpl(n+1, jumpBack)
      else minSideJumpsImpl(n+1, jumpBack ++ Seq(obstacle -> None))
    }
    minSideJumpsImpl(0, Map(1->Some(1), 2->Some(0), 3->Some(1)))
  }
}
```