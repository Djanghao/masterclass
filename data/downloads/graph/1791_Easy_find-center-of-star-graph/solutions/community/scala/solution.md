# Simple O(1) Scala solution

**Author:** Rinnsteve
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/5379533/](https://leetcode.com/problems/find-center-of-star-graph/solutions/5379533/)

---

# Intuition
As the star graph requires connections to a single point we need to find the common node.

# Approach
Check if the second edge contains the first node of the first edge.

If it does not, return the second node of the first edge.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
object Solution {
    def findCenter(edges: Array[Array[Int]]): Int = {
        if(edges(1).contains(edges(0)(0))) edges(0)(0)
        else edges(0)(1)
    }
}
```