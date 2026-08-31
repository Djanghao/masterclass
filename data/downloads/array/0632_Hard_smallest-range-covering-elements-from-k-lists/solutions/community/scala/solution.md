# 10 lines scala sliding window recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/5907836/](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/5907836/)

---

```scala []
object Solution {
  def smallestRange(nums: List[List[Int]]): Array[Int] = {
    lazy val k = nums.size
    lazy val sorted = nums.iterator.zipWithIndex.flatMap{case (a,i) => a.iterator.map(_ -> i)}.to(Vector).sorted
    def f(lo:Int, hi:Int, aMap:Map[Int,Int], acc: List[Int]): List[Int] =
      lazy val decMap = aMap.updatedWith(sorted(lo)._2){_.collect{case cnt if cnt>1 => cnt-1}}
      lazy val incMap = aMap + (sorted(hi)._2 -> (aMap.getOrElse(sorted(hi)._2,0)+1))
      lazy val acc2 = if(acc.last-acc.head>sorted(hi-1)._1-sorted(lo)._1) List(lo,hi-1).map(sorted(_)._1) else acc
      if(aMap.size<k && hi>=sorted.size) acc
      else if(aMap.size>=k)  f(lo+1, hi, decMap, acc2)
      else f(lo, hi+1, incMap, acc)
    f(0,0,Map(),List(sorted.head._1,sorted.last._1)).to(Array)
  }
}
```