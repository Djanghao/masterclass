# Graph coloring - Simple BFS O(n + m)

**Author:** james_hansel
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6098932/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6098932/)

---

# Intuition
Try to independently solve for both trees the number of nodes that have an even distance from it. We can generalize it by coloring the nodes of the tree. Nodes of the same color have even distance from each other if and only if we use only two colors and color adjacent nodes with different colors. This works because we do not have cycles in a tree, so we can ensure that adjacent nodes will get different colors, hence there exists a unique set of nodes that are at an even distance from each other.

# Approach
First build the adjacency list of the tree.
Then we use BFS to color the nodes of the tree, starting from node 0. 
The algorithm follows the same rules as a normal BFS, but we just change color before traversing adjacent nodes, and store the color of each node in the nodeColor array. We also store count of nodes having same color.
Lastly, to answer all the queries, ie, maximum possible number of nodes that are target to the ith node of the first tree, we check the color of the ith node of the first tree (stored in nodeColor1), and we greedily add this count to the max(color2[0], color2[1]), as we can attach the ith node of the first tree to a node in the second tree such that this ith node is at an even distance to the nodes of the second tree that have max coloring.

# Complexity
- Time complexity:
O(n + m)

- Space complexity:
O(n + m)

# Code
```java []
class Solution {
    Map<Integer, List<Integer>> tree1, tree2;
    int[] color1, color2;
    int[] nodeColor1, nodeColor2;
    void build(int[][] edges, Map<Integer, List<Integer>> map) {
        int n = edges.length + 1;
        for(int i = 0; i < n; i++) map.put(i, new LinkedList<>());
        for(int[] e : edges) {
            map.get(e[0]).add(e[1]);
            map.get(e[1]).add(e[0]);
        }
    }
    void bfs(Map<Integer, List<Integer>> map, int[] color, int[] col) {
        int n = map.size();
        Queue<int[]> q = new LinkedList<>();
        boolean[] vis = new boolean[n];
        q.add(new int[]{0, 0});
        while(!q.isEmpty()) {
            int[] top = q.poll();
            vis[top[0]] = true;
            col[top[0]] = top[1];
            color[top[1]]++;
            for(int adj : map.get(top[0])) if(!vis[adj]) {
                // (top[1] + 1) % 2 to ensure [0, 1] coloring.
                q.add(new int[]{adj, (top[1] + 1) % 2});
            }
        }
    }
    public int[] maxTargetNodes(int[][] edges1, int[][] edges2) {
        int n = edges1.length + 1, m = edges2.length + 1;
        tree1 = new HashMap<>(); tree2 = new HashMap<>(); 
        color1 = new int[2]; color2 = new int[2];
        nodeColor1 = new int[n]; nodeColor2 = new int[m];
        // build the trees
        build(edges1, tree1); 
        build(edges2, tree2);
        // use bfs to color trees.
        bfs(tree1, color1, nodeColor1);
        bfs(tree2, color2, nodeColor2);
        int[] arr = new int[n]; 
        int max = Math.max(color2[0], color2[1]);
        for(int i = 0; i < n; i++) {
            arr[i] = color1[nodeColor1[i]] + max;
        }
        return arr;
    }
}
```
```cpp []
class Solution {
public:
    vector<vector<int>> tree1, tree2;
    vector<int> color1, color2;
    vector<int> nodeColor1, nodeColor2;
    void build(vector<vector<int>> &edges, vector<vector<int>> &mp) {
        mp.resize(edges.size() + 1);
        for(auto &e : edges) {
            mp[e[0]].push_back(e[1]);
            mp[e[1]].push_back(e[0]);
        }
    }
    void bfs(vector<vector<int>> &mp, vector<int> &color, vector<int> &nodeColor) {
        int n = mp.size();
        queue<pair<int, int>> q;
        vector<bool> vis(n, 0);
        q.push({0, 0});
        while(!q.empty()) {
            auto[i, c] = q.front(); q.pop();
            vis[i] = true;
            nodeColor[i] = c;
            color[c]++;
            for(int adj : mp[i]) if(!vis[adj]) {
                q.push({adj, (c + 1) % 2});
            }
        }
    }
    vector<int> maxTargetNodes(vector<vector<int>>& edges1, vector<vector<int>>& edges2) {
        int n = edges1.size() + 1, m = edges2.size() + 1;
        nodeColor1.assign(n, 0); nodeColor2.assign(m, 0);
        color1.assign(2, 0); color2.assign(2, 0);
        // build trees
        build(edges1, tree1);
        build(edges2, tree2);
        // color trees using bfs
        bfs(tree1, color1, nodeColor1);
        bfs(tree2, color2, nodeColor2);
        vector<int> arr(n);
        int mx = max(color2[0], color2[1]);
        for(int i = 0; i < n; i++) arr[i] = color1[nodeColor1[i]] + mx;
        return arr;
    }
};
```