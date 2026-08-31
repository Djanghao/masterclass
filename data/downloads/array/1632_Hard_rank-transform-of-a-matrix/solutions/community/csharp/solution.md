# C# | Memory beats 100.00% (115.44 MB)  [EXPLAINED]

**Author:** r9n
**Votes:** 5
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/5801563/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/5801563/)

---

# Intuition
The problem is about ranking each element in a matrix based on its size relative to other elements in its row and column. I want to ensure that if one element is larger than another, its rank is higher. To achieve this, I need to group elements in the same row and column and then assign ranks based on their relative sizes.

# Approach
Union-Find Setup: First, I use a Union-Find data structure to group elements in the same row or column together. This helps in finding connected components efficiently.

Group Elements: I traverse the matrix and group positions of elements with the same value based on their connections (rows and columns).

Assign Ranks: For each group of connected components, I calculate the rank by checking the maximum rank in the respective rows and columns, then update the result matrix accordingly.

# Complexity
- Time complexity:
O(m * n log(m * n)) - Finding and uniting components in the Union-Find structure takes near constant time due to path compression. Processing the matrix and sorting elements is the main time-consuming part.

- Space complexity:
 O(m * n) - The space is used for storing the Union-Find structure, grouping elements, and the result matrix.

# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution {
    // Optimized Find with path compression
    private int Find(Dictionary<int, int> parent, int x) {
        if (!parent.ContainsKey(x)) parent[x] = x;
        if (parent[x] != x) parent[x] = Find(parent, parent[x]);
        return parent[x];
    }

    // Optimized Union by rank
    private void Union(Dictionary<int, int> parent, int x, int y) {
        int rootX = Find(parent, x);
        int rootY = Find(parent, y);
        if (rootX != rootY) parent[rootX] = rootY;
    }

    public int[][] MatrixRankTransform(int[][] matrix) {
        int m = matrix.Length;
        int n = matrix[0].Length;

        // Initialize Union-Find structure for each matrix value
        var valueToParent = new Dictionary<int, Dictionary<int, int>>();

        // Union rows and columns
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int value = matrix[i][j];
                if (!valueToParent.ContainsKey(value)) 
                    valueToParent[value] = new Dictionary<int, int>();
                Union(valueToParent[value], i, ~j);
            }
        }

        // Collect positions grouped by value and their connected components
        var groupedValues = new SortedDictionary<int, Dictionary<int, List<int[]>>>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int value = matrix[i][j];
                if (!groupedValues.ContainsKey(value)) 
                    groupedValues[value] = new Dictionary<int, List<int[]>>();
                int root = Find(valueToParent[value], i);
                if (!groupedValues[value].ContainsKey(root)) 
                    groupedValues[value][root] = new List<int[]>();
                groupedValues[value][root].Add(new[] { i, j });
            }
        }

        // Initialize result matrix and rank trackers
        var result = new int[m][];
        for (int i = 0; i < m; i++) result[i] = new int[n];
        var rowMaxRank = new int[m];
        var colMaxRank = new int[n];

        // Assign ranks to each group of connected components
        foreach (var kvp in groupedValues) {
            foreach (var component in kvp.Value) {
                int rank = 1;
                foreach (var pos in component.Value) {
                    rank = Math.Max(rank, Math.Max(rowMaxRank[pos[0]], colMaxRank[pos[1]]) + 1);
                }
                foreach (var pos in component.Value) {
                    result[pos[0]][pos[1]] = rank;
                    rowMaxRank[pos[0]] = Math.Max(rowMaxRank[pos[0]], rank);
                    colMaxRank[pos[1]] = Math.Max(colMaxRank[pos[1]], rank);
                }
            }
        }

        return result;
    }
}

```