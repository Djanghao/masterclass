# Scala

**Author:** fairgrieve
**Votes:** 2
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/1976418/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/1976418/)

---

```
object Solution {
  def reductionOperations(nums: Array[Int]): Int = {
    if (nums.sortInPlace.isEmpty) 0
    else {
      val view = nums.view
      view
        .zip(view.tail)
        .scanLeft(0) {
          case (numOperations, (prev, curr)) if prev == curr => numOperations
          case (numOperations, _) => numOperations + 1
        }
        .sum
    }
  }
}
```