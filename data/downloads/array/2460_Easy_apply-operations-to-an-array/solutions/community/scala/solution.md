# Scala ( fold ) functional

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/3364348/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/3364348/)

---

```
object Solution {
  def applyOperations(nums: Array[Int]): Array[Int] = {
    val processed = nums.zipWithIndex.foldLeft(nums) {
      case (arr, (a, i)) =>
        if (i + 1 < arr.length && arr(i) == arr(i + 1)) {
          arr.updated(i, arr(i) << 1).updated(i + 1, 0)
        } else {
          arr
        }
    }
    val values = processed.filter(a => a != 0)
    val zeros = processed.length - values.length
    values ++ Array.fill(zeros)(0)
  }
}
```