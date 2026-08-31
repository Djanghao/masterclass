# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/4743339/](https://leetcode.com/problems/row-with-maximum-ones/solutions/4743339/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def rowAndMaximumOnes(mat: Array[Array[Int]]): Array[Int] = {
        mat.zipWithIndex.map(m => Array(m._2, m._1.count(_ == 1))).maxBy(_.last)
    }
}
```