# C#

**Author:** Dawoodmalik
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/4878421/](https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/4878421/)

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
class Solution {
    public int MinTrioDegree(int n, int[][] edges) {
        // Create adjacency list to represent the graph
        Dictionary<int, HashSet<int>> adjacency = new Dictionary<int, HashSet<int>>();
        for (int i = 1; i <= n; i++) {
            adjacency[i] = new HashSet<int>();
        }
        foreach (int[] edge in edges) {
            int u = edge[0], v = edge[1];
            adjacency[u].Add(v);
            adjacency[v].Add(u);
        }

        int minDegree = int.MaxValue;

        // Iterate through all possible trios
        for (int i = 1; i <= n; i++) {
            for (int j = i + 1; j <= n; j++) {
                for (int k = j + 1; k <= n; k++) {
                    // Check if there's an edge between every pair of nodes in the trio
                    if (adjacency[i].Contains(j) && adjacency[i].Contains(k) && adjacency[j].Contains(k)) {
                        // Calculate the degree of the trio
                        int degree = adjacency[i].Count + adjacency[j].Count + adjacency[k].Count - 6;
                        minDegree = Math.Min(minDegree, degree);
                    }
                }
            }
        }

        return minDegree == int.MaxValue ? -1 : minDegree;
    }
    }

```