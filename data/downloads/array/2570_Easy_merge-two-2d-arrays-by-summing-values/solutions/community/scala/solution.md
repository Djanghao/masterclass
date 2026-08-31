# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3232250/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3232250/)

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
    def mergeArrays(nums1: Array[Array[Int]], nums2: Array[Array[Int]]): Array[Array[Int]] = {
        (nums1.map(n => (n(0), n(1))) ++ nums2.map(n => (n(0), n(1)))).groupBy(_._1).mapValues(_.map(_._2).sum).toArray.sortBy(_._1).map(n => Array(n._1, n._2))
    }
}
```