# Simple solution in dart

**Author:** sabindaryal
**Votes:** 2
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/5706514/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/5706514/)

---

# Intuition
The problem can be visualized as finding connected components in a graph. Each stone is a node, and an edge exists between two nodes if they share the same row or the same column. The goal is to remove as many stones as possible while ensuring that each remaining stone has at least one stone in its row or column. The key observation is that the maximum number of stones that can be removed is equal to the total number of stones minus the number of connected components.

# Approach
Graph Representation:

Treat each stone as a node in a graph.
Create an edge between two nodes if they share the same row or the same column.

Union-Find (Disjoint Set):

Use the Union-Find data structure to group stones into connected components.
For each stone, consider its row and column as separate entities. Union the row index and the negated column index to ensure uniqueness and avoid collisions between rows and columns.

Union Operation:

Connect each stone's row and column. This operation groups all stones that are either in the same row or column into the same connected component.

Counting Components:

After processing all stones, the number of unique connected components is counted. The total number of stones minus this count gives the maximum number of stones that can be removed.

Output:

The result is obtained by subtracting the number of connected components from the total number of stones.

# Complexity
- Time complexity:
Union-Find Operations: The time complexity for the union and find operations is nearly constant, O(\u03B1(N)), where \u03B1 is the inverse Ackermann function, which grows extremely slowly. Since we perform these operations for each stone, the overall time complexity is
O(N\u22C5\u03B1(N)), where N is the number of stones.

- Space complexity:
We need to store the parent and rank for each stone's row and column, resulting in a space complexity of O(N).

# Code
```dart []
class Solution {
  int removeStones(List<List<int>> stones) {
    final Map<int, int> parent = {};
    final Map<int, int> rank = {};

    int find(int x) {
      if (parent[x] == null) {
        parent[x] = x;
        rank[x] = 0;
      }
      if (parent[x] != x) {
        parent[x] = find(parent[x]!);
      }
      return parent[x]!;
    }

    void union(int x, int y) {
      int rootX = find(x);
      int rootY = find(y);

      if (rootX != rootY) {
        if (rank[rootX]! > rank[rootY]!) {
          parent[rootY] = rootX;
        } else if (rank[rootX]! < rank[rootY]!) {
          parent[rootX] = rootY;
        } else {
          parent[rootY] = rootX;
          rank[rootX] = rank[rootX]! + 1;
        }
      }
    }

    for (final stone in stones) {
      union(stone[0], ~stone[1]);
    }

    final Set<int> uniqueComponents = {};
    for (final stone in stones) {
      uniqueComponents.add(find(stone[0]));
    }

    return stones.length - uniqueComponents.length;
  }
}


```