# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS - Depth First Search

**Author:** lancertech6
**Votes:** 134
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5385386/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5385386/)

---

![Screenshot 2024-06-29 093230.png](./images/0.png)


# YouTube Video Explanation:

### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail.

<!-- **If you want a video for this question please write in the comments** -->


https://youtu.be/Gt9mP2rl8Ts


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2400 Subscribers*
*Current Subscribers: 2348*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In a Directed Acyclic Graph (DAG), determining the ancestors of each node involves identifying all nodes from which there is a directed path to the given node. The ancestors of a node \\( v \\) are those nodes \\( u \\) such that there exists a path from \\( u \\) to \\( v \\). Since the graph is acyclic, this problem can be efficiently solved using Depth-First Search (DFS).

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Graph Representation:**
   - Use an adjacency list to represent the graph. This allows efficient traversal of the graph.

2. **DFS for Ancestor Tracking:**
   - Perform a DFS from each node to identify all nodes that can reach the current node. During this traversal, mark nodes as visited to avoid cycles and repeated work.
   - While performing the DFS, if we reach a node, we add the starting node (ancestor) to the list of ancestors for the reached node.

3. **Result Collection:**
   - Initialize a list of lists to store the ancestors for each node. Each index corresponds to a node and contains a list of its ancestors.

4. **Sorting:**
   - After collecting all ancestors using DFS, sort the ancestor lists to meet the requirement of ascending order.

# Complexity
- **Time Complexity:**
  - Building the graph: \\( O(m) \\), where \\( m \\) is the number of edges.
  - DFS from each node: \\( O(n \u22C5 (n + m)) \\) in the worst case, where \\( n \\) is the number of nodes and \\( m \\) is the number of edges. Each DFS can traverse up to all nodes and edges.
  - Sorting the ancestors: \\( O(n  \u22C5  k log k) \\), where \\( k \\) is the average number of ancestors per node.
  
  The overall time complexity is \\( O(n  \u22C5  (n + m)) \\) considering the nested DFS traversal.

- **Space Complexity:**
  - Storing the graph: \\( O(n + m) \\).
  - Storing the ancestors: \\( O(n  \u22C5  n) \\) in the worst case if every node is an ancestor of every other node.
  - Additional space for recursion stack in DFS: \\( O(n) \\).


# Step By Step Explanation
Let's break down the process using tables for Example 1:

**Input:**
```plaintext
n = 8
edges = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
```

**Graph Representation:**
```plaintext
Node | Adjacent Nodes
---------------------
0    | [3, 4]
1    | [3]
2    | [4, 7]
3    | [5, 6, 7]
4    | [6]
5    | []
6    | []
7    | []
```

**DFS Traversal and Ancestors Collection:**
1. Start DFS from node 0:
   - Reach nodes: 3, 4, 5, 6, 7
   - Update ancestors for these nodes.
   
2. Start DFS from node 1:
   - Reach nodes: 3, 5, 6, 7
   - Update ancestors for these nodes.
   
3. Start DFS from node 2:
   - Reach nodes: 4, 6, 7
   - Update ancestors for these nodes.
   
4. Continue for other nodes similarly.

**Collected Ancestors (Before Sorting):**
```plaintext
Node | Ancestors
---------------------
0    | []
1    | []
2    | []
3    | [0, 1]
4    | [0, 2]
5    | [0, 1, 3]
6    | [0, 1, 2, 3, 4]
7    | [0, 1, 2, 3]
```

**Sorted Ancestors:**
```plaintext
Node | Ancestors (Sorted)
-------------------------
0    | []
1    | []
2    | []
3    | [0, 1]
4    | [0, 2]
5    | [0, 1, 3]
6    | [0, 1, 2, 3, 4]
7    | [0, 1, 2, 3]
```

This approach ensures that all ancestors are collected and sorted correctly for each node in the DAG.



# Code
```java []
class Solution {
    public List<List<Integer>> getAncestors(int n, int[][] edges) {
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            res.add(new ArrayList<>());
        }

        ArrayList<Integer>[] graph = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] edge : edges) {
            graph[edge[0]].add(edge[1]);
        }

        for (int i = 0; i < n; i++) {
            dfs(graph, i, i, res, new boolean[n]);
        }

        for (int i = 0; i < n; i++) {
            res.get(i).sort(Integer::compareTo);
        }

        return res;
    }

    private void dfs(ArrayList<Integer>[] graph, int parent, int curr, List<List<Integer>> res, boolean[] visit) {
        visit[curr] = true;
        for (int dest : graph[curr]) {
            if (!visit[dest]) {
                res.get(dest).add(parent);
                dfs(graph, parent, dest, res, visit);
            }
        }
    }
}

```
```C++ []
class Solution {
public:
    vector<vector<int>> getAncestors(int n, vector<vector<int>>& edges) {
        vector<vector<int>> res(n);
        vector<vector<int>> graph(n);
        
        for (const auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
        }
        
        for (int i = 0; i < n; ++i) {
            vector<bool> visit(n, false);
            dfs(graph, i, i, res, visit);
        }
        
        for (int i = 0; i < n; ++i) {
            sort(res[i].begin(), res[i].end());
        }
        
        return res;
    }

private:
    void dfs(vector<vector<int>>& graph, int parent, int curr, vector<vector<int>>& res, vector<bool>& visit) {
        visit[curr] = true;
        for (int dest : graph[curr]) {
            if (!visit[dest]) {
                res[dest].push_back(parent);
                dfs(graph, parent, dest, res, visit);
            }
        }
    }
};
```
```Python []
class Solution(object):
    def getAncestors(self, n, edges):
        res = [[] for _ in range(n)]
        graph = [[] for _ in range(n)]
        
        for edge in edges:
            graph[edge[0]].append(edge[1])
        
        for i in range(n):
            self.dfs(graph, i, i, res, [False] * n)
        
        for i in range(n):
            res[i].sort()
        
        return res
    
    def dfs(self, graph, parent, curr, res, visit):
        visit[curr] = True
        for dest in graph[curr]:
            if not visit[dest]:
                res[dest].append(parent)
                self.dfs(graph, parent, dest, res, visit)
        
```
```JavaScript []
var getAncestors = function(n, edges) {
    let res = Array.from({ length: n }, () => []);
    let graph = Array.from({ length: n }, () => []);
    
    for (let edge of edges) {
        graph[edge[0]].push(edge[1]);
    }
    
    for (let i = 0; i < n; i++) {
        dfs(graph, i, i, res, Array(n).fill(false));
    }
    
    for (let i = 0; i < n; i++) {
        res[i].sort((a, b) => a - b);
    }
    
    return res;
};

function dfs(graph, parent, curr, res, visit) {
    visit[curr] = true;
    for (let dest of graph[curr]) {
        if (!visit[dest]) {
            res[dest].push(parent);
            dfs(graph, parent, dest, res, visit);
        }
    }
}
```

![upvote.png](./images/1.png)
