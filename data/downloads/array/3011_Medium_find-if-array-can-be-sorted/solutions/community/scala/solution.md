# 6 lines scala solution

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/4994240/](https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/4994240/)

---

```
object Solution {
  def canSortArray(nums: Array[Int]): Boolean = {
    def countBits(n: Int, acc:Int = 0): Int =  if(n==0) acc else countBits(n & (n-1), acc+1)
    lazy val x0 = nums.iterator.drop(1).foldLeft{List(List(nums.head))}{case (acc,n) =>
      if(countBits(n) == countBits(acc.head.head)) (n +: acc.head) +: acc.tail
      else List(n) +: acc
    }.reverse
    (x0.size == 1) || x0.sliding(2,1).forall{s => s.head.max <= s.last.min}
  }
}
```