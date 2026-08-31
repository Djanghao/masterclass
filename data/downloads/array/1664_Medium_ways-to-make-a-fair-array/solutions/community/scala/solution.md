# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5038765/](https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5038765/)

---


```
object Solution {
  def waysToMakeFair(nums: Array[Int]): Int = {
    ((nums.zipWithIndex.foldLeft(List((0,0))){case (l,(n,i)) =>
      (if((i&1) == 0) ((l.head._1 + n), l.head._2) else (l.head._1, (l.head._2 + n))) +: l
    }.tail.reverse)
    zip
    (nums.zipWithIndex.reverse.foldLeft(List((0,0))){case (l,(n,i)) =>
      (if((i&1) != 0) ((l.head._1 + n), l.head._2) else (l.head._1, (l.head._2 + n))) +: l
    }.tail))
    .count {case ((ep,op),(es,os)) => (ep+es) == (op+os)}
  }
}
```