# ✅ Scala: O(n) 2 sum solution

**Author:** aaabramov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/3465639/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/3465639/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```scala
object Solution {

  def findMiddleIndex(nums: Array[Int]): Int = {
    var lSum = 0
    var rSum = nums.sum

    for (i <- nums.indices) {
      rSum -= nums(i)
      if (lSum == rSum) {
        return i
      }
      lSum += nums(i)
    }

    -1
  }

}
```