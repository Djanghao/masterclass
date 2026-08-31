# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3423153/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3423153/)

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
    def findColumnWidth(grid: Array[Array[Int]]): Array[Int] = 
        grid.transpose.map(n => n.map(_.toString.length).max)
    
}
```