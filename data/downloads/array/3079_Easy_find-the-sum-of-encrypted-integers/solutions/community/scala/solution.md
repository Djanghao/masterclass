# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4885833/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4885833/)

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
    def sumOfEncryptedInt(nums: Array[Int]): Int = {
        nums.map(n => (n.toString.toList.max, n.toString.size)).map(n => Array.fill(n._2)(n._1).mkString.toInt).sum
    }
}
```