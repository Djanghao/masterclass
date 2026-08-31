# Kotlin | O(1)

**Author:** naXa777
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/4625507/](https://leetcode.com/problems/find-center-of-star-graph/solutions/4625507/)

---

# Complexity

- Time complexity: $$O(1)$$ - constant time
- Space complexity: $$O(1)$$ - zero extra variables

# Code
```kt
class Solution {
    fun findCenter(edges: Array<IntArray>): Int {
        return if (edges[0][0] == edges[1][0])
            edges[0][0]
        else if (edges[0][0] == edges[1][1])
            edges[0][0]
        else
            edges[0][1]
    }
}
```

# Screenshot

![image.png](./images/0.png)
