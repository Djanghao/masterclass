# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/4768722/](https://leetcode.com/problems/largest-sum-of-averages/solutions/4768722/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2 * k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def largestSumOfAverages(nums: Array[Int], k: Int): Double = {
      val len = nums.length
      val prefSum = nums.scanLeft(0)(_ + _)
      val res = (0 until len).map(i=>(prefSum(len) - prefSum(i)).toDouble / (len - i)).toArray
      for (_ <- 1 until k; i <- 0 until len; j <- i + 1 until len) res(i) = math.max(res(i), (prefSum(j) - prefSum(i)).toDouble / (j - i) + res(j))
      res.head
    }
}
```