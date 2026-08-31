# scala ugly nonFP solution. cleaner nonFP or FP produce MLE

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/5280209/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/5280209/)

---

```scala
object Solution {
  import collection.immutable.Queue
  def checkArray(nums: Array[Int], k: Int): Boolean =
    def forall(lo:Int, hi:Int): Boolean =
      if(hi<=lo) true else nums(hi)==nums(lo) && forall(lo,hi-1)
    def dec(lo:Int, hi:Int): Unit = if(hi>=lo) { nums(hi)-=nums(lo); dec(lo,hi-1) }
    def f(i: Int): Boolean =
      if(nums(i)<0) false
      else if(i+k>=nums.size) forall(i,i+k-1)
      else { dec(i,i+k-1); f(i+1) }
    f(0)

  def checkArray_Non_FP_MLE(nums: Array[Int], k: Int): Boolean =
    def f(i: Int): Boolean =
      lazy val j=i+k
      lazy val h = nums(i)
      if(h<0) false
      else if(j>=nums.size) ((i+1) until j).forall{x => nums(x) == h }
      else {(j-1 to i by -1).foreach(i2 => nums(i2)-=h); f(i+1)}
    f(0)

  def checkArrayFP_MLE(nums: Array[Int], k: Int): Boolean =
    def f(seq: Seq[Int], q:Queue[Int]): Boolean =
      if(q.head<0) false 
      else if(seq.isEmpty) q.tail.forall(_ == q.head)
      else f(seq.tail, (q.tail).map(_ - q.head) :+ seq.head)
    f(nums.iterator.drop(k).to(List), nums.iterator.take(k).to(Queue))
}
```