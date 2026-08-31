# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/2036319/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/2036319/)

---

```
  def maxProductDifference(nums: Array[Int]): Int = {
    val sortedNums = nums.sorted
    sortedNums.last * sortedNums(nums.length - 2) - sortedNums(0) * sortedNums(1)
  }
```