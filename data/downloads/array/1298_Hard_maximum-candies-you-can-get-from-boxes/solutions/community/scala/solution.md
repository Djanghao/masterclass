# 8 lines scala bfs recursion with several sets

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/3313530/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/3313530/)

---

# Code
```
object Solution {
  def maxCandies(status: Array[Int], candies: Array[Int], keys: Array[Array[Int]], containedBoxes: Array[Array[Int]], initialBoxes: Array[Int]): Int = {
      def impl(as: Set[Int], os: Set[Int], vs: Set[Int], acc: Int): Int = { // 
        lazy val (x0,x1) = as.partition(x => os.contains(x) && !vs.contains(x))
        lazy val newAcc = acc + x0.iterator.map(candies).sum
        lazy val newAS = x1 ++ x0.iterator.flatMap(x => containedBoxes(x))
        if(as == newAS) newAcc
        else impl(newAS, os ++ x0.iterator.flatMap(x => keys(x)), vs ++ x0, newAcc)
      }
      impl(initialBoxes.toSet , status.iterator.zipWithIndex.filter(_._1 != 0).map(_._2).toSet, Set(), 0)
  }
}
```