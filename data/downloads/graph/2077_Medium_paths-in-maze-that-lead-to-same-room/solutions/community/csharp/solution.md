# Graph Algo

**Author:** AhmedRagheb
**Votes:** 0
**Link:** [https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/3789790/](https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/3789790/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We solve this problem using the adjacency matrix. We initialize a map, neighbors, containing all rooms as keys and their neighboring rooms as corresponding values
# Complexity
- Time complexity: O(\u2223E\u2223) where E represents the number of edges in the graph.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(\u2223V\u22232) where V represents the number of nodes 

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int NumberOfPaths(int n, int[][] corridors) {
        Dictionary<int, HashSet<int>> neighbors = new Dictionary<int, HashSet<int>>();
        int cycles = 0;

        foreach (var corridor in corridors) {
            int room1 = corridor[0];
            int room2 = corridor[1];

            if (!neighbors.ContainsKey(room1))
                neighbors.Add(room1, new HashSet<int>());
            if (!neighbors.ContainsKey(room2))
                neighbors.Add(room2, new HashSet<int>());

            neighbors[room1].Add(room2);
            neighbors[room2].Add(room1);

            cycles += GetCycles(neighbors[room1], neighbors[room2]);
        }

        return cycles;
    }

    public int GetCycles(HashSet<int> set1, HashSet<int> set2) {
        int count = 0;
        foreach (var element in set1) {
            if (set2.Contains(element)) {
                count++;
            }
        }

        return count;
    }
}
```