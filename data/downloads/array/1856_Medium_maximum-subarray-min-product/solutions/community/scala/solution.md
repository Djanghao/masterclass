# scala ugly monostack made from array to avoid MLE

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/5358108/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/5358108/)

---

```scala
object Solution {
  val aStack = Array.fill(50_001)((-1,-0L))
  def maxSumMinProduct(nums: Array[Int]): Int =
    def g(i: Int = 0, j:Int=0, pfx:Long=0L, acc: Long = -1L): Int =
      def find(i1: Int): Int = if(aStack(i1)._1 < nums(i)) i1 else find(i1-1)
      def mx(i1: Int, lst: Int,  accMx: Long): Long = 
        if(i1>lst) accMx else mx(i1+1, lst, accMx max aStack(i1)._1 * (pfx1 - aStack(i1)._2))
      lazy val pfx1 = pfx+nums(i)
      lazy val k = find(j)
      if (i >= nums.size) (acc % 1_000_000_007).toInt else {
        aStack(k+1) = nums(i) -> (if(j<=k)  pfx else aStack(k+1)._2)
        g(i+1, k+1, pfx1, mx(1,k+1,acc))
      }
    g()
}

// MLE produced by Range usage
object Solution1 {
  lazy val aStack = Array.fill(50_001)((-1,-0L))
  def maxSumMinProduct(nums: Array[Int]): Int =
    @annotation.tailrec
    def g(i: Int = 0, j:Int=0, pfx:Long=0L, acc: Long = -1L): Int =
      lazy val pfx1 = pfx+nums(i)
      lazy val k = (j to 0 by -1).iterator.find(aStack(_)._1 < nums(i)).get
      if (i >= nums.size) (acc % 1_000_000_007).toInt else {
        aStack(k+1) = nums(i) -> (if(j<=k)  pfx else aStack(k+1)._2)
        lazy val acc1 = (1 to k+1).iterator
          .map{i1 =>aStack(i1)._1 * (pfx1 - aStack(i1)._2)}.max max acc
        g(i + 1, k+1, pfx1, acc1)
      }
    g()
}

// MLE produced by List usage
object Solution0 {
  def maxSumMinProduct(nums: Array[Int]): Int =
    @annotation.tailrec
    def f(i: Int = 0, stack: List[(Int, Long)] = List((-1, 0L)), pfx:Long=0L, acc: Long = -1L): Int = {
      lazy val pfx1 = pfx+nums(i)
      lazy val (t0,d0) = stack.span(_._1 >= nums(i))
      lazy val stack1 = (nums(i), t0.lastOption.map(_._2).getOrElse(pfx)) +: d0
      lazy val acc1 = stack1.iterator.take(stack1.size - 1)
        .map{ case (x, pfx0) => x * (pfx1 - pfx0)}.max max acc
      if (i >= nums.size) (acc % 1_000_000_007).toInt
      else f(i + 1, stack1, pfx1, acc1)
    }
    f()
}

```