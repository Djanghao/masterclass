# Simple solution

**Author:** jonh12
**Votes:** 0
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/5470256/](https://leetcode.com/problems/flatten-2d-vector/solutions/5470256/)

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
class Vector2D(_vec: Array[Array[Int]]) {

    val iterator = _vec.toSeq.flatMap(_.toSeq).iterator

    def next(): Int = {
        iterator.next
    }

    def hasNext(): Boolean = {
        iterator.hasNext
    }

}

/**
 * Your Vector2D object will be instantiated and called as such:
 * val obj = new Vector2D(vec)
 * val param_1 = obj.next()
 * val param_2 = obj.hasNext()
 */
```