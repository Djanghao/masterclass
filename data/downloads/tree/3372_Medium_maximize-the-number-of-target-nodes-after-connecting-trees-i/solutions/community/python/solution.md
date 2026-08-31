# Step-By-Step BFS Implementation 🔥 | Simple Beginner Friendly Explanation With Inturition

**Author:** atharvaparab9160
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6099516/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6099516/)

---

# Intuition
#### To maximize the number of nodes "target" to each node in the first tree:

1. Compute how many nodes are reachable within k steps in the first tree.
2. Compute how many nodes are reachable within k\u22121 steps in the second tree (since connecting adds one edge).
3. For each node in the first tree, the best result is its reachable count plus the maximum reachable count from the second tree.

# Approach
1. **Precompute Reachable Nodes**:
Use BFS to calculate how many nodes each node can reach within k steps for the first tree.
Use BFS to calculate how many nodes each node can reach within k\u22121 steps for the second tree.
1. **Find Maximum Boost**:
Find the maximum reachable nodes in the second tree.
1. **Combine Results**:
   - For each node i in the first tree:
answer[i]=reachableCount1[i]+max(reachableCount2)
 
    Return the result array answer.

# Key Concepts in the Code
1. **Breadth-First Search (BFS)**:
    BFS is used to traverse the tree level by level and compute distances.
2. **Adjacency List Representation**:
Efficient representation of the tree structure for traversal.
3. **Combining Results**:
Since queries are independent, we can compute results for tree 1 and tree 2 separately and combine them.

# Complexity
- **Time complexity:**
    - The calculateReachableNodes_BFS function is called separately for each tree. Within it:
        - For each node in the tree (say n for the first tree, m for the second tree):
            -BFS is performed starting from that node.
            -BFS visits each node and edge once for each traversal.

    **The total cost for BFS across all nodes in a tree is:**
O(num_nodes\xD7(num_nodes+num_edges))=O(n\xD7n) for tree 1 and O(m\xD7m) for tree 2.
||**Overall Time Complexity is : O(n^2+m^2)**||

- **Space complexity:**
***Adjacency Lists*** : O(n+m) space.
***Visited Arrays*** : Each BFS requires a visited array of size O(n) or O(m).
***Queue for BFS*** : The queue in BFS has a maximum size proportional to the number of nodes, O(n) or O(m).
***Result Arrays*** : Storing reachable counts for each tree: O(n+m).
||**Total space complexity is:O(n+m)**||

# Code
```python3 []
from collections import deque
from typing import List

class Solution:
    def maxTargetNodes(self, edges1: List[List[int]], edges2: List[List[int]], k: int) -> List[int]:
        # Base case: if k is 0, all nodes can only reach themselves.
        if k == 0:
            return [1] * (len(edges1) + 1)

        # Initialize adjacency lists for both trees
        adjacencyList1 = [[] for _ in range(len(edges1) + 1)]
        adjacencyList2 = [[] for _ in range(len(edges2) + 1)]

        # Build adjacency list for the first tree
        for u, v in edges1:
            adjacencyList1[u].append(v)
            adjacencyList1[v].append(u)

        # Build adjacency list for the second tree
        for u, v in edges2:
            adjacencyList2[u].append(v)
            adjacencyList2[v].append(u)

        

        # Function to calculate reachable nodes within a given distance for a tree
        def calculateReachableNodes_BFS(adjacencyList, maxDistance):
            reachCounts = [0] * len(adjacencyList)
            for startNode in range(len(adjacencyList)):
                # Perform BFS to calculate reachable nodes
                queue = deque([startNode])
                visited = [False] * len(adjacencyList)
                visited[startNode] = True
                level = 0

                # level signifies distance of node from the startNode 
                # if (distance increses more than k) or (queue becomes empty) then the bfs stops 
                # and return the total number of neighbours reachable from the startNode
                while len(queue)!=0 and level < maxDistance:
                    level += 1

                    # this FOR loop ensures that only the elements at that specific level from startNode are seen 
                    lenQ = len(queue)
                    for _ in range(lenQ):
                        currentNode = queue.popleft()
                        for neighbor in adjacencyList[currentNode]:
                            if not visited[neighbor]:
                                visited[neighbor] = True
                                queue.append(neighbor)
                # Store the count of reachable nodes from the current start node
                reachCounts[startNode] = sum(visited)
            return reachCounts

        # Calculate reachable nodes for the first tree within distance k
        reachableCount1 = calculateReachableNodes_BFS(adjacencyList1, k)

        # Calculate reachable nodes for the second tree within distance k-1 
        # we arw using k-1 bcs when we connect tree 1 and tree 2 there will be a edge created there
        reachableCount2 = calculateReachableNodes_BFS(adjacencyList2, k - 1)

        # Find the maximum reachable nodes in the second tree
        maxReachableInTree2 = max(reachableCount2)

        # Add the maximum from the second tree to each node's reachable count in the first tree
        for i in range(len(reachableCount1)):
            reachableCount1[i] += maxReachableInTree2

        return reachableCount1

``````javascript []
console.log('Hello world!')
```
```C++ []
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> maxTargetNodes(vector<vector<int>>& edges1, vector<vector<int>>& edges2, int k) {
        // Base case: if k is 0, all nodes can only reach themselves.
        if (k == 0) {
            return vector<int>(edges1.size() + 1, 1);
        }

        // Initialize adjacency lists for both trees
        int n1 = edges1.size() + 1, n2 = edges2.size() + 1;
        vector<vector<int>> adjacencyList1(n1), adjacencyList2(n2);

        // Build adjacency list for the first tree
        for (auto& edge : edges1) {
            adjacencyList1[edge[0]].push_back(edge[1]);
            adjacencyList1[edge[1]].push_back(edge[0]);
        }

        // Build adjacency list for the second tree
        for (auto& edge : edges2) {
            adjacencyList2[edge[0]].push_back(edge[1]);
            adjacencyList2[edge[1]].push_back(edge[0]);
        }

        // Function to calculate reachable nodes within a given distance for a tree
        auto calculateReachableNodes_BFS = [](vector<vector<int>>& adjacencyList, int maxDistance) {
            int n = adjacencyList.size();
            vector<int> reachCounts(n, 0);
            
            for (int startNode = 0; startNode < n; ++startNode) {
                vector<bool> visited(n, false);
                queue<int> q;
                q.push(startNode);
                visited[startNode] = true;
                int level = 0;

                while (!q.empty() && level < maxDistance) {
                    int lenQ = q.size();
                    ++level;

                    for (int i = 0; i < lenQ; ++i) {
                        int currentNode = q.front();
                        q.pop();
                        
                        for (int neighbor : adjacencyList[currentNode]) {
                            if (!visited[neighbor]) {
                                visited[neighbor] = true;
                                q.push(neighbor);
                            }
                        }
                    }
                }
                reachCounts[startNode] = count(visited.begin(), visited.end(), true);
            }
            return reachCounts;
        };

        // Calculate reachable nodes for the first tree within distance k
        vector<int> reachableCount1 = calculateReachableNodes_BFS(adjacencyList1, k);

        // Calculate reachable nodes for the second tree within distance k-1
        vector<int> reachableCount2 = calculateReachableNodes_BFS(adjacencyList2, k - 1);

        // Find the maximum reachable nodes in the second tree
        int maxReachableInTree2 = *max_element(reachableCount2.begin(), reachableCount2.end());

        // Add the maximum from the second tree to each node's reachable count in the first tree
        for (int i = 0; i < reachableCount1.size(); ++i) {
            reachableCount1[i] += maxReachableInTree2;
        }

        return reachableCount1;
    }
};

```
```Java []
import java.util.*;

class Solution {
    public int[] maxTargetNodes(int[][] edges1, int[][] edges2, int k) {
        if (k == 0) {
            int[] result = new int[edges1.length + 1];
            Arrays.fill(result, 1);
            return result;
        }

        // Create adjacency lists
        List<List<Integer>> adj1 = new ArrayList<>(edges1.length + 1);
        List<List<Integer>> adj2 = new ArrayList<>(edges2.length + 1);

        // Initialize adjacency lists
        for (int i = 0; i <= edges1.length; i++) {
            adj1.add(new ArrayList<>());
        }
        for (int i = 0; i <= edges2.length; i++) {
            adj2.add(new ArrayList<>());
        }

        // Populate adjacency list for first graph
        for (int[] edge : edges1) {
            int u = edge[0], v = edge[1];
            adj1.get(u).add(v);
            adj1.get(v).add(u);
        }

        // Populate adjacency list for second graph
        for (int[] edge : edges2) {
            int u = edge[0], v = edge[1];
            adj2.get(u).add(v);
            adj2.get(v).add(u);
        }

        // Calculate target nodes for first graph
        int[] ans1 = new int[edges1.length + 1];
        for (int i = 0; i < adj1.size(); i++) {
            ans1[i] = bfs(adj1, i, k);
        }

        // Calculate target nodes for second graph
        int[] ans2 = new int[edges2.length + 1];
        for (int i = 0; i < adj2.size(); i++) {
            ans2[i] = bfs(adj2, i, k - 1);
        }

        // Find maximum value in ans2
        int maxi = Arrays.stream(ans2).max().orElse(0);

        // Combine results
        for (int i = 0; i < ans1.length; i++) {
            ans1[i] += maxi;
        }

        return ans1;
    }

    private int bfs(List<List<Integer>> adj, int start, int maxDepth) {
        Queue<Integer> q = new LinkedList<>();
        boolean[] visited = new boolean[adj.size()];
        q.offer(start);
        visited[start] = true;

        int depth = 1;
        while (!q.isEmpty() && depth <= maxDepth) {
            int size = q.size();
            for (int i = 0; i < size; i++) {
                int current = q.poll();
                for (int neighbor : adj.get(current)) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        q.offer(neighbor);
                    }
                }
            }
            depth++;
        }

        // Count visited nodes
        int visitedCount = 0;
        for (boolean v : visited) {
            if (v) visitedCount++;
        }
        return visitedCount;
    }
}
```
