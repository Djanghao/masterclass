# 🔥Best [C++,JAVA,🐍] Code🌟 || 🔥Commented || DFS💯

**Author:** aDish_21
**Votes:** 29
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/3752393/](https://leetcode.com/problems/find-eventual-safe-states/solutions/3752393/)

---

### Connect with me on LinkedIn : https://www.linkedin.com/in/aditya-jhunjhunwala-51b586195/
# Intuition
#### The code is based on the concept of finding eventual safe nodes in a directed graph. Here's the intuition behind the approach:

1. The function `DFS` performs a depth-first search starting from a node `s` in the graph.
2. The `visited` vector keeps track of nodes that have been visited during the DFS traversal.
3. The `dfsVisited` vector keeps track of nodes that are visited in the current DFS path.
4. The `checkCycle` vector is used to mark nodes that are part of a cycle.
5. Initially, all nodes are marked as not visited (`visited` and `dfsVisited` vectors are `false`).
6. For each node in the graph, if it has not been visited, the DFS function is called.
7. During the DFS traversal, if an adjacent node is not visited, the DFS function is recursively called for that node.
8. If the recursive call returns `true`, it means that a cycle is detected, and the current node `s` is marked as part of a cycle in the `checkCycle` vector.
9. If an adjacent node is already visited and also part of the current DFS path (`dfsVisited` is `true`), it indicates a cycle, and the current node `s` is marked as part of a cycle in the `checkCycle` vector.
10. After exploring all adjacent nodes, the current node `s` is marked as not visited in the current DFS path (`dfsVisited[s] = false`).
11. Finally, the `eventualSafeNodes` function iterates over all nodes and adds the nodes that are not part of any cycle (marked as `false` in the `checkCycle` vector) to the `ans` vector.
12. The `ans` vector is returned as the eventual safe nodes in the graph.

#### The main idea is to perform a DFS traversal and detect cycles in the graph. Nodes that are not part of any cycle are considered eventual safe nodes. The `dfsVisited` vector is used to keep track of the current path and detect cycles. The `checkCycle` vector is used to mark nodes that are part of a cycle.
# Code
## An Upvote will be encouraging as it motivates me to post more such solutions\uD83E\uDD17
```C++ []
class Solution {
public:
    bool DFS(int s, vector<vector<int>>& graph, vector<bool>& visited, vector<bool>& dfsVisited, vector<bool>& checkCycle) {
        visited[s] = dfsVisited[s] = true; // Mark the current node as visited and in the current DFS path
        for (auto it : graph[s]) {
            if (!visited[it]) { // If the adjacent node is not visited
                if (DFS(it, graph, visited, dfsVisited, checkCycle))
                    return checkCycle[s] = true; // If a cycle is detected, mark the current node as part of a cycle
            } else if (dfsVisited[it]) { // If the adjacent node is visited and in the current DFS path
                return checkCycle[s] = true; // A cycle is detected, mark the current node as part of a cycle
            }
        }
        dfsVisited[s] = false; // Mark the current node as not visited in the current DFS path
        return false; // No cycle detected, current node is safe
    }
    
    vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
        int v = graph.size();
        vector<bool> visited(v), dfsVisited(v), checkCycle(v);
        vector<int> ans;
        for (int i = 0; i < v; i++) {
            if (!visited[i])
                DFS(i, graph, visited, dfsVisited, checkCycle);
        }
        for (int i = 0; i < v; i++) {
            if (!checkCycle[i])
                ans.push_back(i); // Add the nodes that are not part of any cycle (eventual safe nodes) to the result
        }
        return ans;
    }
};
```
```JAVA []
class Solution {
    public boolean DFS(int s, List<List<Integer>> graph, boolean[] visited, boolean[] dfsVisited, boolean[] checkCycle) {
        visited[s] = dfsVisited[s] = true; // Mark the current node as visited and in the current DFS path
        for (int it : graph.get(s)) {
            if (!visited[it]) { // If the adjacent node is not visited
                if (DFS(it, graph, visited, dfsVisited, checkCycle))
                    return checkCycle[s] = true; // If a cycle is detected, mark the current node as part of a cycle
            } else if (dfsVisited[it]) { // If the adjacent node is visited and in the current DFS path
                return checkCycle[s] = true; // A cycle is detected, mark the current node as part of a cycle
            }
        }
        dfsVisited[s] = false; // Mark the current node as not visited in the current DFS path
        return false; // No cycle detected, current node is safe
    }

    public List<Integer> eventualSafeNodes(int[][] graph) {
        int v = graph.length;
        List<List<Integer>> adjList = new ArrayList<>();
        for (int i = 0; i < v; i++) {
            adjList.add(new ArrayList<>());
        }
        for (int i = 0; i < v; i++) {
            for (int j = 0; j < graph[i].length; j++) {
                adjList.get(i).add(graph[i][j]);
            }
        }

        boolean[] visited = new boolean[v];
        boolean[] dfsVisited = new boolean[v];
        boolean[] checkCycle = new boolean[v];
        List<Integer> ans = new ArrayList<>();

        for (int i = 0; i < v; i++) {
            if (!visited[i])
                DFS(i, adjList, visited, dfsVisited, checkCycle);
        }

        for (int i = 0; i < v; i++) {
            if (!checkCycle[i])
                ans.add(i); // Add the nodes that are not part of any cycle (eventual safe nodes) to the result
        }

        return ans;
    }
}
```
```Python3 []
class Solution:
    def isSafe(self, s, graph, visited, checkCycle):
        if visited[s] == 1:
            return True  # Node is already visited and safe
        if visited[s] == -1:
            return False  # Node is visited and part of a cycle

        visited[s] = -1  # Mark the current node as visited and part of a cycle
        for it in graph[s]:
            if not self.isSafe(it, graph, visited, checkCycle):
                return False  # If any adjacent node is not safe, the current node is not safe

        visited[s] = 1  # Mark the current node as visited and safe
        return True

    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        v = len(graph)
        visited = [0] * v
        checkCycle = []
        for i in range(v):
            if self.isSafe(i, graph, visited, checkCycle):
                checkCycle.append(i)  # Add the nodes that are safe (eventual safe nodes) to the result
        return checkCycle

```
![98b7adbc-5abf-45f7-9b5b-538574194654_1676344687.6513524.png](./images/0.png)
