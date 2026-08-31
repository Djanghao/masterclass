# [scala] fp + hash_table + counting

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4845056/](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4845056/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {
  def maxFrequencyElements(nums: Array[Int]): Int = {
    val freqs = nums.groupBy(identity).values.map(_.size)
    val maxFreq = freqs.max
    freqs.filter(_ == maxFreq).sum
  }
}
```