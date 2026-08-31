# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5224715/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5224715/)

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
  def numberOfPairs(nums1: Array[Int], nums2: Array[Int], k: Int): Long = {
    val map1 = nums1.filter(_ % k == 0).map(_ / k).groupBy(identity).view.mapValues(_.size)
    val map2 = nums2.groupBy(identity).view.mapValues(_.size)
    
    def factors(n: Int): Seq[Int] = (1 to Math.sqrt(n).toInt).filter(n % _ == 0).flatMap(i => Seq(i, n / i)).distinct
    map1.flatMap { case (n, size1) =>
      factors(n).flatMap { m =>
        val size2 = map2.getOrElse(m, 0)
        val pairs = size1.toLong * size2
        Seq(pairs)
      }
    }.sum
  }
}
```