# ugly scala monostack made from Array

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/5392501/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/5392501/)

---

```scala
// one more problem with constraints making impossible write idiomatic scala solution
object Solution {
  def mostCompetitive(nums: Array[Int], k: Int): Array[Int] =
    lazy val diff = nums.size - k
    val stack = Array.fill(nums.size)(-1)
    def h(i: Int, j: Int): Array[Int] =
      if(i>= nums.size || i - j == diff) (stack.take(j) ++ nums.iterator.drop(i)).take(k).to(Array)
      else if(j>0 && nums(i) < stack(j-1)) h(i,j-1)
      else {stack(j) = nums(i); h(i+1, j+1)}
    h(0,0).to(Array)

  def mostCompetitive1(nums: Array[Int], k: Int): Array[Int] =
    def g(i: Int, stack:Seq[Int]): Array[Int] =
      if(i>= nums.size || nums.size - i + stack.size == k) (stack.reverse ++ nums.iterator.drop(i)).take(k).to(Array)
      else if(stack.nonEmpty && nums(i) < stack.head) g(i,stack.tail)
      else g(i+1, nums(i) +: stack)
    g(0, Nil)

  def mostCompetitive0(nums: Array[Int], k: Int): Array[Int] =
    def f(seq: Seq[Int], stack:Seq[Int]): Array[Int] =
      if(seq.isEmpty || seq.size + stack.size == k) (stack.reverse ++ seq).take(k).to(Array)
      else if(stack.nonEmpty && seq.head < stack.head) f(seq,stack.tail)
      else f(seq.tail, seq.head +: stack)
    f(nums.toList, Nil)
}
```