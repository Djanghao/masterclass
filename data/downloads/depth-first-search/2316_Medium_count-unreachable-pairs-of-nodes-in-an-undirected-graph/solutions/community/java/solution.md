# ✅✅Python 🔥Java 🔥C++🔥Simple Solution🔥 Easy to Understand🔥

**Author:** cohesk
**Votes:** 92
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3337487/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3337487/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers this week. I planned to give for next 10,000 Subscribers as well. So **DON'T FORGET** to Subscribe

**Search on YouTube \uD83D\uDC49 "Tech Wired Leetcode" to Subscribe**

Happy Learning, Cheers Guys \uD83D\uDE0A

# Approach:
The problem requires us to count the number of pairs of nodes that are unreachable from each other in an undirected graph. We can approach the problem using the concept of connected components. A connected component is a subgraph where all nodes are reachable from any node in the subgraph. If there are multiple connected components, then any two nodes in different components are unreachable from each other.

We can use a Depth-First Search (DFS) to traverse the graph and count the number of nodes in each connected component. We start with an unvisited node and count the number of nodes reachable from it using DFS. We add the product of this count and the number of visited nodes so far to our answer. We repeat the process with any remaining unvisited nodes until all nodes are visited.

# Intuition:
The intuition behind this approach is that any two nodes in the same connected component are reachable from each other, but any two nodes in different connected components are unreachable from each other. Therefore, we count the number of nodes in each connected component and add the product of the counts of nodes in different components to our answer. This way, we count all pairs of nodes that are unreachable from each other. We use DFS to traverse the graph and count the number of nodes in each connected component.

```Python []
class UnionFind:
    def __init__(self, size):
        self.root = [i for i in range(size)]
        self.rank = [1] * size
        
    def find(self, node):
        if node != self.root[node]:
            self.root[node] = self.find(self.root[node])
        return self.root[node]
    
    def union(self, node1, node2):
        root1 = self.find(node1)
        root2 = self.find(node2)
        if root1 != root2:
            if self.rank[root1] > self.rank[root2]:
                self.root[root2] = root1
            elif self.rank[root1] < self.rank[root2]:
                self.root[root1] = root2
            else:
                self.root[root2] = root1
                self.rank[root1] += 1
                
class Solution:
    def countPairs(self, n: int, edges: List[List[int]]) -> int:
        uf = UnionFind(n)
        for node1, node2 in edges:
            uf.union(node1 - 1, node2 - 1)
        group_sizes = list(Counter([uf.find(i) for i in range(n)]).values())
        ans = 0
        first_group_size = group_sizes[0]
        for i in range(1, len(group_sizes)):
            ans += first_group_size * group_sizes[i]
            first_group_size += group_sizes[i]  
        return ans

```
```Java []

public class Solution {

    private List<Integer>[] graph;

    public long countPairs(int n, int[][] edges) {
        createGraph(n, edges);
        boolean[] visited = new boolean[n];
        int numVisitedNodes = 0;
        long numUnreachablePairsOfNodes = 0;

        for (int node = 0; node < n; ++node) {
            if (!visited[node]) {
                int numNodesInCurrentGroup = depthFirstSearch_countConnectedNodesInCurrentGroup(node, visited);
                numUnreachablePairsOfNodes += (long) numNodesInCurrentGroup * numVisitedNodes;
                numVisitedNodes += numNodesInCurrentGroup;
            }
        }
        return numUnreachablePairsOfNodes;
    }

    private int depthFirstSearch_countConnectedNodesInCurrentGroup(int node, boolean[] visited) {
        visited[node] = true;
        int numConnectedNodes = 1;

        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                numConnectedNodes += depthFirstSearch_countConnectedNodesInCurrentGroup(neighbor, visited);
            }
        }
        return numConnectedNodes;
    }

    private void createGraph(int n, int[][] edges) {
        graph = new List[n];
        for (int node = 0; node < n; ++node) {
            graph[node] = new ArrayList<>();
        }
        for (int i = 0; i < edges.length; ++i) {
            graph[edges[i][0]].add(edges[i][1]);
            graph[edges[i][1]].add(edges[i][0]);
        }
    }
}

```
```C++ []

class Solution {
public:
    long countPairs(int n, vector<vector<int>>& edges) {
        createGraph(n, edges);
        vector<bool> visited(n, false);
        int numberOfVisitedNodes = 0;
        long numberOfUnreachablePairsOfNodes = 0;

        for (int node = 0; node < n; ++node) {
            if (!visited[node]) {
                int numberOfNodesInCurrentGroup = depthFirstSearch_countConnectedNodesInCurrentGroup(node, visited);
                numberOfUnreachablePairsOfNodes += (long) numberOfNodesInCurrentGroup * numberOfVisitedNodes;
                numberOfVisitedNodes += numberOfNodesInCurrentGroup;
            }
        }
        return numberOfUnreachablePairsOfNodes;
    }

private:
    vector<int>* graph;

    int depthFirstSearch_countConnectedNodesInCurrentGroup(int node, vector<bool>& visited) {
        visited[node] = true;
        int countConnectedNodes = 1;

        for (int neighbour : graph[node]) {
            if (!visited[neighbour]) {
                countConnectedNodes += depthFirstSearch_countConnectedNodesInCurrentGroup(neighbour, visited);
            }
        }
        return countConnectedNodes;
    }

    void createGraph(int numberOfNodes, vector<vector<int>>& edges) {
        graph = new vector<int>[numberOfNodes];
        for (int i = 0; i < edges.size(); ++i) {
            graph[edges[i][0]].push_back(edges[i][1]);
            graph[edges[i][1]].push_back(edges[i][0]);
        }
    }
};

```
![image.png](./images/0.png)

# Please UPVOTE \uD83D\uDC4D
