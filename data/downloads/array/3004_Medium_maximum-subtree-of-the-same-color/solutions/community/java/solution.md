# Java Simple DFS & Backtracking Beats 100% Time & Space

**Author:** _velasoka
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4550989/](https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4550989/)

---

**Intuition**
If we know the **subtree details**, we can decide if **current root contributes to final result**

**Approach**
do normal DFS while backtracking return the subtree details.
1. if **all subtree has same color** return `{currentNode, maxNodes}`
2. else return `{-1, maxNodes}` indicating one of the node has different color

**Time & Space complexity:** O(n)


```
class Solution {
    public int maximumSubtreeSize(int[][] edges, int[] colors) {
        List<Integer>[] graph = createGraph(edges);
        return dfs(0, graph, colors, -1)[1];
    }

    int[] dfs(int u, List<Integer>[] graph, int[] colors, int parent) {
        int maxNodes = -1; //till now how many max node you have with same color
        int currentNode = 1; //with only current node what is your count
        for(int v : graph[u]) {
            if(v == parent) {
                continue;
            }
            int[] tmp = dfs(v, graph, colors, u);
            //check v & u has same color
            if(colors[v]==colors[u] && currentNode!=-1) {
                currentNode+=tmp[0];
            } else {
                currentNode=-1; //one of the sub tree node has different color
            }
            maxNodes = Math.max(maxNodes, tmp[1]);
        }
        return new int[]{currentNode, Math.max(currentNode, maxNodes)};
    }

    private List<Integer>[] createGraph(int[][] edges) {
        int n = edges.length+1;
        List<Integer>[] graph = new List[n];
        for(int i = 0;i < n; i++) {
            graph[i]=new ArrayList<>();
        }
        for(int[] edge : edges) {
            int u = edge[0], v = edge[1];
            graph[u].add(v);
            graph[v].add(u);
        }
        return graph;
    }
}
```
Please **UPVOTE** if you find the solution helpful.