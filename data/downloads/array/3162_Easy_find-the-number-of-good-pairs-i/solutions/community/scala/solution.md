# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5215263/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5215263/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def numberOfPairs(nums1: Array[Int], nums2: Array[Int], k: Int): Int = {
    nums1.flatMap(n => nums2.map(_ * k).filter(m => n % m == 0)).size
  }
}
```