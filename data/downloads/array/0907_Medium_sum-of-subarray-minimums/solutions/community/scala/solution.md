# scala monotonic stack

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4600030/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4600030/)

---

```
object Solution {
  def sumSubarrayMins(arr: Array[Int]): Int = {
    def inner(l:Seq[(Int,Int)], lastV:Int, lastI:Int, acc3:Long): Long =
      if(l.isEmpty) acc3 + lastV * (lastI+1)
      else inner(l.tail, l.head._1, l.head._2, acc3 + lastV * (lastI - l.head._2))
    def impl(i: Int, stack: Seq[(Int,Int)], acc: Long): Int = {
      lazy val s2:Seq[(Int,Int)] = (arr(i) -> i) +: stack.dropWhile(_._1 >= arr(i))
      if(i >= arr.size) (acc % 1_000_000_007).toInt
      else impl(i+1, s2, inner(s2, 0, i+1, acc)) 
    }
    impl(0, List(), 0)
  }
}

```