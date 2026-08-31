# O(n) Scala solution. Works for any number of arrays

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/4878968/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/4878968/)

---

# Intuition
Moving with pointers over the given arrays will do the job.
When the pointers point to the same values, add that value to the result.
When they don't move the pointer of the array that points to the smallest value


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$ or $$(O(n))$$ if considering the result list too

# Code
```
object Solution {
  def arraysIntersection(arr1: Array[Int], arr2: Array[Int], arr3: Array[Int]): List[Int] = {
    val arrs = Array(arr1, arr2, arr3)
    val i = Array.ofDim[Int](3)
    val n = arrs.map(_.length)
    val result = collection.mutable.ListBuffer.empty[Int]
    def advanceToNextSameValue: Boolean = {
      i.zip(n).forall(_ < _) && {
        val values = arrs.zip(i).map(_(_))
        values.tail.forall(_ == values.head) || {
          val (_, arr) = values.zipWithIndex.minBy(_._1)
          i(arr) += 1
          advanceToNextSameValue
        }
      }
    }
    while (i.zip(n).forall(_ < _)) {
      if (advanceToNextSameValue) result.append(arrs.head(i.head))
      i(0) += 1
    }
    result.toList
  }
}
```