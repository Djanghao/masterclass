# Easy Union Find Solution

**Author:** gordchan
**Votes:** 1
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/3942200/](https://leetcode.com/problems/redundant-connection/solutions/3942200/)

---

https://youtu.be/P6tEGES63ag

# Code
```
public class Solution {
    int[] parent;
    public int[] FindRedundantConnection(int[][] edges) {
        parent = new int[edges.Length + 1];
        var res = new List<int[]>();

        for (var i = 1; i < parent.Length; i++) {
            parent[i] = i;
        }

        foreach (var edge in edges) {
            if (findParent(edge[0]) != findParent(edge[1])) {
                union(edge[0], edge[1]);
            }
            else {
                res.Add(edge);
            }
        }
        return res[res.Count - 1];
    }
    
    private int findParent(int x) {
        if (parent[x] != x) {
            parent[x] = findParent(parent[x]);
        }
        return parent[x];
    }
    private void union(int x, int y) {
        parent[findParent(x)] = parent[findParent(y)];
    }
}
```