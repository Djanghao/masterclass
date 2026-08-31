# C# | Runtime beats 100.00%, Memory beats 50.00% [EXPLAINED]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/5796732/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/5796732/)

---

# Intuition
To determine if two cities are connected either directly or indirectly based on shared divisors, I needed to group cities that can be connected through common divisors greater than a threshold. Think of it like connecting nodes in a graph where edges are defined by common divisors.

# Approach
Union-Find Setup: I used a Union-Find structure to group cities. Each city starts as its own group.

Group Cities: For each number greater than the threshold, I connected all its multiples. This step merges cities into groups if they share a common divisor.

Query Processing: For each query, I checked if the two cities are in the same group by comparing their representatives in the Union-Find structure.

# Complexity
- Time complexity:
O(n log n + q \u03B1(n)): Connecting cities by divisors takes O(n log n) time, and checking each query is O(q \u03B1(n)), where \u03B1(n) is almost constant.

- Space complexity:
O(n): I used an array to keep track of the representative of each city.

# Code
```csharp []
public class Solution {
    // Path compression only
    public int Find(int[] parent, int x) {
        if (parent[x] != x) {
            parent[x] = Find(parent, parent[x]);
        }
        return parent[x];
    }

    // Union without rank array
    public void Union(int[] parent, int x, int y) {
        int rootX = Find(parent, x);
        int rootY = Find(parent, y);
        if (rootX != rootY) {
            parent[rootY] = rootX;
        }
    }

    public IList<bool> AreConnected(int n, int threshold, int[][] queries) {
        int[] parent = new int[n + 1];

        // Initialize the Union-Find parent array
        for (int i = 1; i <= n; i++) {
            parent[i] = i;
        }

        // For each number greater than threshold, union its multiples
        for (int i = threshold + 1; i <= n; i++) {
            for (int multiple = i * 2; multiple <= n; multiple += i) {
                Union(parent, i, multiple);
            }
        }

        // Answer each query
        IList<bool> result = new List<bool>();
        foreach (var query in queries) {
            int a = query[0], b = query[1];
            result.Add(Find(parent, a) == Find(parent, b));
        }

        return result;
    }
}

```