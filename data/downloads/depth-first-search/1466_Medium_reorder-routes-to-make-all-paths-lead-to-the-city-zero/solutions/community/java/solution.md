# 🔥Easy Solutions with Exaplanation in Java 📝, Python 🐍, and C++ 🖥️🧐Look at once 💻

**Author:** Vikas-Pathak-123
**Votes:** 132
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3334051/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3334051/)

---

# Intuition
We can use DFS to traverse the tree and change the direction of edges if needed.

# Approach
First, we create an adjacency list to represent the tree. Each node in the list contains a list of its neighbors.

To change the direction of edges, we assign a direction to each edge. If an edge goes from node i to node j, we represent it as i -> j. If an edge goes from node j to node i, we represent it as j -> -i.

Then, we start DFS from node 0. We mark visited nodes to avoid revisiting them. If we reach a node i that has not been visited before, it means we need to change the direction of the edge that leads to node i. We do this by adding 1 to the result if the edge is directed from node j to node i (i.e., j -> i), and 0 otherwise (i.e., j -> -i).

We repeat this process until all nodes have been visited.

Finally, we return the total number of edges that we have changed.

# Complexity
- Time complexity: O(n), where n is the number of nodes in the tree. We traverse the tree once using DFS.

- Space complexity: O(n), where n is the number of nodes in the tree. We use a boolean array to keep track of visited nodes. Also, we use an adjacency list to represent the tree, which requires O(n) space.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
``` Java []
class Solution {
    int dfs(List<List<Integer>> al, boolean[] visited, int from) {
        int change = 0;
        visited[from] = true;
        for (var to : al.get(from))
            if (!visited[Math.abs(to)])
                change += dfs(al, visited, Math.abs(to)) + (to > 0 ? 1 : 0);
        return change;   
    }
    public int minReorder(int n, int[][] connections) {
        List<List<Integer>> al = new ArrayList<>();
        for(int i = 0; i < n; ++i) 
            al.add(new ArrayList<>());
        for (var c : connections) {
            al.get(c[0]).add(c[1]);
            al.get(c[1]).add(-c[0]);
        }
        return dfs(al, new boolean[n], 0);
    }
}
```
``` C++ []
class Solution {
public:
    int dfs(vector<vector<int>> &al, vector<bool> &visited, int from) {
    auto change = 0;
    visited[from] = true;
    for (auto to : al[from])
        if (!visited[abs(to)])
            change += dfs(al, visited, abs(to)) + (to > 0);
    return change;        
    }
    int minReorder(int n, vector<vector<int>>& connections) {
        vector<vector<int>> al(n);
        for (auto &c : connections) {
            al[c[0]].push_back(c[1]);
            al[c[1]].push_back(-c[0]);
        }
        return dfs(al, vector<bool>(n) = {}, 0);
    }
};
```
``` Python []
class Solution:
    def dfs(self, al, visited, from_node):
        change = 0
        visited[from_node] = True
        for to_node in al[from_node]:
            if not visited[abs(to_node)]:
                change += self.dfs(al, visited, abs(to_node)) + (1 if to_node > 0 else 0)
        return change

    def minReorder(self, n, connections):
        al = [[] for _ in range(n)]
        for c in connections:
            al[c[0]].append(c[1])
            al[c[1]].append(-c[0])
        visited = [False] * n
        return self.dfs(al, visited, 0)

```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```