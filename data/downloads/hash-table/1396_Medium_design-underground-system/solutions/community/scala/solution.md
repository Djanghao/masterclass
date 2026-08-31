# scala soln beats 100 % runtime, memory using map

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/5404112/](https://leetcode.com/problems/design-underground-system/solutions/5404112/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n)
# Code
```
import scala.collection.mutable

class UndergroundSystem() {

  val stationTimeTravelMap: mutable.Map[String, mutable.Map[String, Seq[Int]]] = mutable.Map.empty

  val userEnterMap: mutable.Map[Int, (String, Int)] = mutable.Map.empty

  def checkIn(id: Int, stationName: String, t: Int): Unit = {
    userEnterMap.put(id, (stationName, t))
  }

  
  def checkOut(id: Int, stationName: String, t: Int): Unit = {
    val (start, t1) = userEnterMap(id)
    val destinationMap: mutable.Map[String, Seq[Int]] = stationTimeTravelMap.getOrElse(start, mutable.Map.empty)
    destinationMap.put(stationName, destinationMap.getOrElse(stationName, Seq()) :+ t - t1)
    stationTimeTravelMap.put(start,destinationMap)
    userEnterMap.remove(id)
  }

  def getAverageTime(startStation: String, endStation: String): Double = {
    val seq = stationTimeTravelMap(startStation)(endStation)
    seq.sum.toDouble/seq.size.toDouble
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * val obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * val param_3 = obj.getAverageTime(startStation,endStation)
 */
```