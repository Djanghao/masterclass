# C# | Memory beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/5801875/](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/5801875/)

---

# Intuition\r
I thought of the problem as building a tree, where room 0 is the root and every other room has a direct parent. Since we can only build a room once its parent is built, the task becomes about figuring out how many different ways we can build the rooms while following this structure. The number of ways to do this depends on the size of each subtree in this "room tree."\r
\r
# Approach\r
First, I created a graph from the prevRoom array, where each room points to the room that must be built first. Then, I performed a DFS (depth-first search) to explore each room and count the number of rooms (or "subtree size") under it. For each subtree, I calculated how many ways we can arrange its rooms using combinations. I used modular arithmetic to avoid large numbers, caching combination results to speed up the process.\r
\r
# Complexity\r
- Time complexity:\r
\r
Building the graph: O(n), since we loop through each room to set up the graph.\r
\r
DFS and combination calculation: O(n), because we visit each room and do constant-time operations using cached combinations.\r
\r
Overall: O(n).\r
\r
- Space complexity:\r
\r
Graph storage: O(n) for arrays storing edges.\r
\r
Caches for combinations and factorials: O(n).\r
\r
Overall: O(n).\r
\r
# Code\r
```csharp []\r
using System.Collections.Extension;\r
using System.Collections.Generic;\r
\r
public class Solution\r
{\r
    // Constants for the problem constraints and modulo value\r
    const int MAX_N = (int)1e5 + 1;\r
    const int MOD = (int)1e9 + 7;\r
\r
    // Arrays for graph structure and factorial calculations\r
    int[] heads = new int[MAX_N], nextEdge = new int[MAX_N], edges = new int[MAX_N];\r
    Map<(int, int), long> combinationMap = new(); // Cache for combinations\r
    Map<int, long> inverseFactorialMap = new(); // Cache for inverse factorials\r
    long[] factorial = new long[MAX_N]; // Stores factorial values\r
    int edgeIndex = 0;\r
\r
    public int WaysToBuildRooms(int[] prevRoom)\r
    {\r
        // Initialize graph and factorial values\r
        Array.Fill(heads, -1);\r
        Array.Fill(factorial, 1);\r
\r
        // Build the adjacency list for the rooms\r
        for (int i = 1; i < prevRoom.Length; i++)\r
        {\r
            int u = prevRoom[i], v = i;\r
            edges[edgeIndex] = v;\r
            nextEdge[edgeIndex] = heads[u];\r
            heads[u] = edgeIndex++;\r
        }\r
\r
        // Precompute inverse factorials using Fermat's Little Theorem\r
        for (int i = 1; i <= prevRoom.Length; i++)\r
        {\r
            inverseFactorialMap[i] = ModInverse(i, MOD - 2);\r
        }\r
\r
        // Perform DFS and calculate the number of ways to build rooms\r
        Dfs(0);\r
\r
        // Compute the final result by multiplying factorials mod MOD\r
        for (int i = 1; i < factorial.Length; i++)\r
        {\r
            factorial[i] = factorial[i - 1] * factorial[i] % MOD;\r
        }\r
\r
        return (int)factorial[prevRoom.Length - 1];\r
    }\r
\r
    // DFS to traverse the tree and calculate factorials\r
    int Dfs(int u)\r
    {\r
        int totalSubtreeSize = 0;\r
        for (int i = heads[u]; i != -1; i = nextEdge[i])\r
        {\r
            int child = edges[i];\r
            int childSubtreeSize = Dfs(child);\r
            totalSubtreeSize += childSubtreeSize;\r
            factorial[child] = factorial[child] * CalculateCombinations(totalSubtreeSize, childSubtreeSize) % MOD;\r
        }\r
        return totalSubtreeSize + 1;\r
    }\r
\r
    // Calculate combination C(n, k) mod MOD using caching\r
    long CalculateCombinations(int n, int k)\r
    {\r
        if (combinationMap.ContainsKey((n, k)))\r
        {\r
            return combinationMap[(n, k)];\r
        }\r
\r
        if (k == 0 || k == n) return 1;\r
        if (k > n) return 0;\r
\r
        long result = 1;\r
        for (int i = 1; i <= k; i++)\r
        {\r
            result = (n - k + i) * inverseFactorialMap[i] % MOD * result % MOD;\r
        }\r
\r
        return combinationMap[(n, k)] = result;\r
    }\r
\r
    // Modular exponentiation to calculate a^b % MOD\r
    long ModInverse(long a, long b)\r
    {\r
        long result = 1;\r
        while (b != 0)\r
        {\r
            if ((b & 1) != 0)\r
            {\r
                result = result * a % MOD;\r
            }\r
            a = a * a % MOD;\r
            b >>= 1;\r
        }\r
        return result;\r
    }\r
}\r
\r
// Custom map class that provides a default value if the key does not exist\r
namespace System.Collections.Extension\r
{\r
    using System.Collections.Generic;\r
\r
    public class Map<TKey, TValue> : Dictionary<TKey, TValue>\r
    {\r
        public new TValue this[TKey key]\r
        {\r
            get\r
            {\r
                TValue value;\r
                return TryGetValue(key, out value) ? value : default(TValue);\r
            }\r
            set { base[key] = value; }\r
        }\r
    }\r
}\r
\r
```