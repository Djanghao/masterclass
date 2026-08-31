# scala SortedMap

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/5393017/](https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/5393017/)

---

```scala
object Solution {
  def minSumSquareDiff(nums1: Array[Int], nums2: Array[Int], k1: Int, k2: Int): Long = 
    lazy val x0 = collection.immutable.SortedMap.from(
    (nums1.iterator zip nums2).map{case (a,b) => (a-b).abs}.toList
      .groupMapReduce(identity)(_ => 1)(_ + _))(Ordering.Int.reverse)
      .withDefaultValue(0)
    def f(aMap:Map[Int,Int], rem: Int):Map[Int,Int] =
      lazy val (k0,v0) = aMap.head
      lazy val (k1,v1) = aMap.iterator.slice(1, 2).toList.headOption.getOrElse(0,0)
      lazy val rem1 = rem - ((k0-k1)*v0)
      lazy val (y0,y1) = (rem /v0, rem % v0)
      if(rem == 0 || aMap.isEmpty) aMap
      else if(rem1>=0) f(aMap - k0 + (k1 -> (v0+v1)) - 0, rem1)
      else aMap - k0 + ((k0-y0) -> (v0-y1)) + ((k0-y0-1) -> (aMap(k0-y0-1)+y1))
    f(x0, k1+k2).iterator.map{case (a,b) => 1L*a*a*b}.sum
}
```