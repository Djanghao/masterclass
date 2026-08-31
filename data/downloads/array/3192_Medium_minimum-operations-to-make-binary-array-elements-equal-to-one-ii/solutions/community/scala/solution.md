# scala oneliners

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5467843/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5467843/)

---

```scala
object Solution {
  def minOperations(nums: Array[Int]): Int =
    nums.iterator.foldLeft(0){case (acc,x) =>
      if((acc & 1)!=x) acc else acc+1
    }

  def minOperations1(nums: Array[Int]): Int =
    nums.iterator.foldLeft((0,0)){case ((acc,flipped),x) =>
      if(flipped!=x) (acc,flipped) else (acc+1, 1-flipped)
    }._1
}
```