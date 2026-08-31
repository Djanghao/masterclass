# Shortest Scala Solution

**Author:** dsansyzbayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/3942835/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/3942835/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Flatten Array, Sort and get by index
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
    def kthSmallest(matrix: Array[Array[Int]], k: Int): Int = {
        matrix.flatten.sorted.apply(k-1)
    }
}
```