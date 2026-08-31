# 😀Runtime 187 ms Beats 93.75%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-genetic-difference-query/solutions/5319460/](https://leetcode.com/problems/maximum-genetic-difference-query/solutions/5319460/)

---

# Code
```
import java.util.*;

class TrieNode {
    TrieNode[] child = new TrieNode[2];
    int go = 0;

    void increase(int number, int d) {
        TrieNode cur = this;
        for (int i = 17; i >= 0; --i) {
            int bit = (number >> i) & 1;
            if (cur.child[bit] == null) {
                cur.child[bit] = new TrieNode();
            }
            cur = cur.child[bit];
            cur.go += d;
        }
    }

    int findMax(int number) {
        TrieNode cur = this;
        int ans = 0;
        for (int i = 17; i >= 0; --i) {
            int bit = (number >> i) & 1;
            if (cur.child[1 - bit] != null && cur.child[1 - bit].go > 0) {
                cur = cur.child[1 - bit];
                ans |= (1 << i);
            } else {
                cur = cur.child[bit];
            }
        }
        return ans;
    }
}

public class Solution {
    private TrieNode trieRoot = new TrieNode();

    public int[] maxGeneticDifference(int[] parents, int[][] queries) {
        int n = parents.length, m = queries.length, root = -1;
        List<List<Integer>> graph = new ArrayList<>(n);
        for (int i = 0; i < n; ++i) {
            graph.add(new ArrayList<>());
        }
        for (int i = 0; i < n; ++i) {
            if (parents[i] == -1) {
                root = i;
            } else {
                graph.get(parents[i]).add(i);
            }
        }
        List<List<int[]>> queryByNode = new ArrayList<>(n);
        for (int i = 0; i < n; ++i) {
            queryByNode.add(new ArrayList<>());
        }
        for (int i = 0; i < m; ++i) {
            queryByNode.get(queries[i][0]).add(new int[]{queries[i][1], i});
        }

        int[] ans = new int[m];
        dfs(root, graph, queryByNode, ans);
        return ans;
    }

    private void dfs(int u, List<List<Integer>> graph, List<List<int[]>> queryByNode, int[] ans) {
        trieRoot.increase(u, 1);
        for (int[] p : queryByNode.get(u)) {
            ans[p[1]] = trieRoot.findMax(p[0]);
        }
        for (int v : graph.get(u)) {
            dfs(v, graph, queryByNode, ans);
        }
        trieRoot.increase(u, -1);
    }
}

```