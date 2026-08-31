# Scala double sorting

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/3334760/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/3334760/)

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
    def maxSubsequence(nums: Array[Int], k: Int): Array[Int] = {
        nums.zipWithIndex.sortBy(_._1).takeRight(k).sortBy(_._2).map(_._1)
    }
}
```