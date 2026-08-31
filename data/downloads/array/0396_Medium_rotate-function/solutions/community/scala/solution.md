# [Scala] Concise functional solution using scanLeft & foldLeft

**Author:** cosminci
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotate-function/solutions/1483131/](https://leetcode.com/problems/rotate-function/solutions/1483131/)

---

```
  def maxRotateFunction(nums: Array[Int]): Int = {
    val (total, n) = (nums.sum, nums.length)
    val initialSum = nums.indices.foldLeft(0) {
      case (sum, i) => sum + i * nums(i)
    }
    (1 until nums.length).scanLeft(initialSum) {
      case (prevSum, i) => prevSum + total - n * nums(n - i)
    }.max
  }
```