# C# Greedy algorithm

**Author:** GetRid
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/5378071/](https://leetcode.com/problems/find-center-of-star-graph/solutions/5378071/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve the problem of finding the center of a star graph, we can observe that the center node is the only node that appears in all the edges. Therefore, by checking the first two edges, we can determine the center since the center node must be in both edges.
___

# Approach
<!-- Describe your approach to solving the problem. -->
// Get the nodes from the first edge
// Check if either of these nodes is the center by checking the second edge
// Return node2
___


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(1).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1).
___

# Code
```
public class Solution {
    public int FindCenter(int[][] edges) {
        // Get the nodes from the first edge
        int node1 = edges[0][0];
        int node2 = edges[0][1];

        // Check if either of these nodes is the center by checking the second edge
        if (node1 == edges[1][0] || node1 == edges[1][1]) {
            return node1;
        }
        return node2;
    }
}

```