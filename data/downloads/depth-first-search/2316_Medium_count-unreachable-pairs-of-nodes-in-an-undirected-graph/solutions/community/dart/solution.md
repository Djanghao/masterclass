# Dart-Union Find

**Author:** torocholazzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3339474/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3339474/)

---

# Approach
1. Using Union Find to group the connected node.
2. Count each group size.
3. Count all disconnected edges.
4. Divide it by 2 because the problem ask for pair.

# Code
```
class Solution {
    int countPairs(int n, List<List<int>> edges) {
        List<int> parent = List.filled(n, -1);
        List<int> rank = List.filled(n, 0);

        int find(int x) {
            if (parent[x] == -1) return x;
            parent[x] = find(parent[x]);
            return parent[x];
        }

        void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);

            if (rootX != rootY) {
                if (rank[rootX] < rank[rootY]) {
                    rootX ^= rootY;
                    rootY ^= rootX;
                    rootX ^= rootY;
                }
                parent[rootY] = rootX;
                rank[rootX] += rank[rootX] == rank[rootY] ? 1 : 0;
            }
        }

        for (var edge in edges) {
            union(edge[0], edge[1]);
        }

        Map<int, int> count = {};
        for (int i = 0; i < n; i++) {
            int root = find(i);
            count[root] = (count[root] ?? 0) + 1;
        }

        int ans = 0;
        for (var c in count.values) {
            ans += c * (n - c);
        }

        return ans ~/ 2;
    }
}

```

Note:
We are using XOR operator ^ to swap the value