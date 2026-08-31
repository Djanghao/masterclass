# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5450213/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5450213/)

---

```scala
object Solution {
  def minOperations(nums: Array[Int]): Int =
    def g(i: Int, acc: Int): Int =
      if(nums.size - i < 3 && nums.reverseIterator.take(2).forall(_ == 1)) acc
      else if(nums.size - i < 3) -1
      else if(nums(i)==1) g(i+1,acc)
      else {
        nums(i+1) = 1-nums(i+1)
        nums(i+2) = 1-nums(i+2)
        g(i+1,acc+1)
      }
    g(0,0)
}
```