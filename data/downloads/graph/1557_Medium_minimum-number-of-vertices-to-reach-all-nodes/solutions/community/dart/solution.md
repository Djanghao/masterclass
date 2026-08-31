# Beats 100.00%

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/5351826/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/5351826/)

---

# Approach
Find the vertices that are not visited by any other vertices. These vertices are the smallest set of vertices from which all nodes in the graph are reachable. We can find these vertices by iterating through the edges and marking the destination vertices as visited. Then we iterate through all the vertices and add the vertices that

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> findSmallestSetOfVertices(int n, List<List<int>> edges) {
    final result = <int>[];
    final visited = List.filled(n, false);
    for (List<int> edge in edges) {
      visited[edge[1]] = true;
    }
    for (int i = 0; i < n; i++) {
      if (!visited[i]) {
        result.add(i);
      }
    }
    return result;
  }
}
```