# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/3769473/](https://leetcode.com/problems/maximum-equal-frequency/solutions/3769473/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maxEqualFreq(nums: Array[Int]): Int = {
      val countMap = scala.collection.mutable.Map[Int, Int]()
      val freqMap = scala.collection.mutable.Map[Int, Int]()
      var res = 0

      for (i <- nums.indices) {
        countMap(nums(i)) = countMap.getOrElse(nums(i), 0) + 1
        val freq = countMap(nums(i))
        freqMap(freq) = freqMap.getOrElse(freq, 0) + 1
        val count = freqMap(freq) * freq
        if (count == i + 1 && i != nums.length - 1) res = Math.max(res, i + 2)
        else if (count == i) res = Math.max(res, i + 1)
      }
      res
    }
}
```