# Simplest solution | C# | 100% efficient

**Author:** Baymax_
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3536912/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3536912/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
***Problem statement:** Find the smallest set of vertices from which all nodes in the graph are reachable.*

Since it is given that it is a directed acyclic graph (where all the nodes are conncected), in order to find the smallest set of vertices from which all nodes can be reached, **we simply need to find all the nodes which has only out-going edges (no incoming edges)**
<br>

![Screenshot (1).png](./images/0.png)

## Please upvote if you like the simple approach

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) - as we need to loop over all the given edges once

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) - as we use a hashset to store all the vertices with incoming edges

# Code
```
public class Solution {
    public IList<int> FindSmallestSetOfVertices(int n, IList<IList<int>> edges) {
        //To store vertices which has incoming edge..
        HashSet<int> verticesWithInEdge = new HashSet<int>();
        foreach (var edge in edges)
        {
            verticesWithInEdge.Add(edge[1]);
        }

        //To store vertices which has no incoming edge (has only outgoing edge)
        List<int> onlyOutGoing = new List<int>();
        for (int i = 0; i < n; i++)
        {
            if (!verticesWithInEdge.Contains(i))
                onlyOutGoing.Add(i);
        }

        return onlyOutGoing;
    }
}
```
## Please upvote if you like the simple approach

![Upvote - cat.jpg](./images/1.jpeg)
