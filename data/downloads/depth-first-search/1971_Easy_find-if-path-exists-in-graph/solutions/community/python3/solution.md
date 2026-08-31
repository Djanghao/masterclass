# 💯Faster✅💯Lesser✅4 Methods🧠Detailed Approach🎯DFS🔥BFS🔥DSU🔥Std Algorithm🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 136
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5052207/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5052207/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 4 ways to solve this question with detailed explanation of each approach:

# \uD83C\uDFAFProblem Explaination: 
The `Find if Path Exists in Graph` problem involves determining whether there is a path between two given nodes (`source` and `destination`) in an undirected graph. The graph is represented by `n` nodes and a list of `edges`, where each edge specifies a connection between two nodes.

**Given:**
- `n`: Number of nodes in the graph.
- `edges`: List of edges where each edge is represented as `[u, v]`, indicating an undirected edge between node `u` and node `v`.
- `source`: The starting node for the path.
- `destination`: The target node to reach.

**Objective:**
You need to implement a solution that can determine if there exists a path from the `source` node to the `destination` node in the given graph.

**Output:**
Return `True` if there exists a path from `source` to `destination`, otherwise return `False`.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering four different methods to solve this problem:
1. Depth-First Search (DFS)
2. Breadth-First Search (BFS)
3. Union-Find (Disjoint Set Union)
4. Using Standard Graph Algorithms

# 1\uFE0F\u20E3Depth-First Search (DFS)\uD83E\uDD13: 
1. **Graph Representation:** 
   - Construct an adjacency list representation of the graph using the given `edges`. This representation allows efficient traversal of nodes and their neighbors.

2. **Depth-First Search (DFS) Function:**
   - Implement a recursive DFS function (`dfs`) to traverse the graph starting from the `source` node.
   - Use a `visited` set to keep track of nodes that have been visited during the traversal to avoid revisiting and potential infinite loops (cycles).
   - Base case: If the current node being visited is the `destination`, return `True` as a path has been found.
   - Recursive case: For each neighbor of the current node, if it has not been visited yet, recursively call `dfs` on that neighbor.
   - If any recursive call returns `True`, propagate `True` back up through the call stack indicating that a path to the `destination` has been found.
   - If the DFS traversal completes without finding a path to the `destination`, return `False`.

3. **Execution:**
   - Invoke the `dfs` function starting from the `source` node and return the result.

<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(nlogn)` for summing up the array.

* \uD83D\uDE80 Space Complexity: `O(1)`  -->

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = collections.defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        
        def dfs(node, visited):
            if node == destination:
                return True
            visited.add(node)
            for neighbor in graph[node]:
                if neighbor not in visited:
                    if dfs(neighbor, visited):
                        return True
            return False
        
        visited = set()
        return dfs(source, visited)
```
```Java []
class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
            graph.computeIfAbsent(v, k -> new ArrayList<>()).add(u);
        }
        
        Set<Integer> visited = new HashSet<>();
        return dfs(source, destination, graph, visited);
    }
    
    private boolean dfs(int node, int destination, Map<Integer, List<Integer>> graph, Set<Integer> visited) {
        if (node == destination) {
            return true;
        }
        visited.add(node);
        for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
            if (!visited.contains(neighbor)) {
                if (dfs(neighbor, destination, graph, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
}

```
```C++ []
class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
        unordered_map<int, vector<int>> graph;
        for (const auto& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph[u].push_back(v);
            graph[v].push_back(u);
        }
        
        unordered_set<int> visited;
        return dfs(source, destination, graph, visited);
    }
    
    bool dfs(int node, int destination, unordered_map<int, vector<int>>& graph, unordered_set<int>& visited) {
        if (node == destination) {
            return true;
        }
        visited.insert(node);
        for (int neighbor : graph[node]) {
            if (visited.find(neighbor) == visited.end()) {
                if (dfs(neighbor, destination, graph, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
};
```
#  2\uFE0F\u20E3Breadth-First Search (BFS)\uD83D\uDE0E:
1. **Graph Representation:** 
   - Similarly, construct an adjacency list representation of the graph using the given `edges`.

2. **Breadth-First Search (BFS) Function:**
   - Utilize a queue (`deque`) to perform a level-order traversal starting from the `source` node.
   - Use a `visited` set to keep track of nodes that have been visited during the traversal.
   - Begin BFS by enqueueing the `source` node into the queue and marking it as visited.
   - While the queue is not empty, dequeue a node, check if it is the `destination`, and return `True` if so.
   - Otherwise, enqueue all unvisited neighbors of the dequeued node into the queue and mark them as visited.
   - If the BFS traversal completes without finding the `destination`, return `False`.

3. **Execution:**
   - Invoke the BFS function starting from the `source` node and return the result.

<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` - for summing up the array.

* \uD83D\uDE80 Space Complexity: `O(1)` -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = collections.defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        
        queue = deque([source])
        visited = set([source])
        
        while queue:
            node = queue.popleft()
            if node == destination:
                return True
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        return False
```
```Java []
class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
            graph.computeIfAbsent(v, k -> new ArrayList<>()).add(u);
        }
        
        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        
        queue.offer(source);
        visited.add(source);
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            if (node == destination) {
                return true;
            }
            List<Integer> neighbors = graph.getOrDefault(node, new ArrayList<>());
            for (int neighbor : neighbors) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }
        
        return false;
    }
}

```
```C++ []
class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
        unordered_map<int, vector<int>> graph;
        
        for (auto& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph[u].push_back(v);
            graph[v].push_back(u);
        }
        
        queue<int> queue;
        unordered_set<int> visited;
        
        queue.push(source);
        visited.insert(source);
        
        while (!queue.empty()) {
            int node = queue.front();
            queue.pop();
            if (node == destination) {
                return true;
            }
            for (int neighbor : graph[node]) {
                if (visited.find(neighbor) == visited.end()) {
                    visited.insert(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        
        return false;
    }
};
```
# 3\uFE0F\u20E3Union-Find (Disjoint Set Union)\uD83D\uDE0E:
1. **Initialization:** 
   - Initialize a `parent` array where each node initially points to itself (each node is its own parent).
   - Use a `rank` array to keep track of the rank (or depth) of each node's subtree for efficient union operations.

2. **Union-Find Operations:**
   - Implement `find` and `union` operations to support efficient checking and merging of disjoint sets (connected components) in the graph.
   - The `find` operation utilizes path compression to find the root (or representative) of the set containing a given node.
   - The `union` operation merges two sets by linking their roots based on the `rank` to keep the tree balanced.

3. **Connect Components:**
   - Iterate through each edge `(u, v)` in the `edges` list and perform the `union` operation to connect nodes `u` and `v`.

4. **Path Existence Check:**
   - After connecting all nodes based on the edges, use the `find` operation to check if the `source` and `destination` nodes belong to the same connected component (set).
   - If they do, a path exists between `source` and `destination`; otherwise, it does not.

<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` - for XORing all the numbers

* \uD83D\uDE80 Space Complexity: `O(1)` -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        parent = list(range(n))
        rank = [1] * n
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        def union(x, y):
            rootX = find(x)
            rootY = find(y)
            if rootX != rootY:
                if rank[rootX] > rank[rootY]:
                    parent[rootY] = rootX
                elif rank[rootX] < rank[rootY]:
                    parent[rootX] = rootY
                else:
                    parent[rootY] = rootX
                    rank[rootX] += 1
        
        for u, v in edges:
            union(u, v)
        
        return find(source) == find(destination)
```
```Java []
class Solution {
    private int[] parent;
    private int[] rank;
    
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        parent = new int[n];
        rank = new int[n];
        
        // Initialize parent pointers and ranks
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 1;
        }
        
        // Union-find operations based on given edges
        for (int[] edge : edges) {
            union(edge[0], edge[1]);
        }
        
        // Check if source and destination belong to the same set
        return find(source) == find(destination);
    }
    
    private int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    private void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX != rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
}

```
<!-- ```C++ []
class Solution {
private:
    vector<int> parent;
    vector<int> parent;
    vector<int> rank;
    
public:
    bool validPath(int n, std::vector<std::vector<int>>& edges, int source, int destination) {
        parent.resize(n);
        rank.resize(n, 1);
        
        // Initialize parent pointers
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        
        // Union-find operations based on given edges
        for (auto& edge : edges) {
            unionSets(edge[0], edge[1]);
        }
        
        // Check if source and destination belong to the same set
        return find(source) == find(destination);
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    void unionSets(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX != rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
};

``` -->
# 4\uFE0F\u20E3Using Standard Graph Algorithms
1. **Graph Representation:** 
   - Construct an adjacency list representation of the graph using the given `edges`.

2. **Dijkstra's Algorithm (or Similar):**
   - Implement a shortest path algorithm (e.g., Dijkstra's algorithm) to find the shortest paths from the `source` node to all other nodes in the graph.
   - Initialize a `distances` dictionary to keep track of the shortest known distance from the `source` to each node.
   - Use a priority queue (min-heap) to efficiently explore nodes in order of their current shortest distance from the `source`.
   - Begin with the `source` node having a distance of `0` in the priority queue.
   - Continuously dequeue nodes from the priority queue, update distances to neighboring nodes, and enqueue them if a shorter path is found.
   - If the `destination` node is dequeued from the priority queue, a path from `source` to `destination` has been found, and return `True`.

3. **Path Existence Check:**
   - After the algorithm completes, check if the `destination` node was reached during the execution.
   - If so, a path exists from `source` to `destination`; otherwise, it does not.

<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` for iterating over the array and the sequence.

* \uD83D\uDE80 Space Complexity: `O(n)` for the hash table. -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = collections.defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        
        distances = {node: float('inf') for node in range(n)}
        distances[source] = 0
        priority_queue = [(0, source)]
        
        while priority_queue:
            current_distance, current_node = heapq.heappop(priority_queue)
            if current_node == destination:
                return True
            
            if current_distance > distances[current_node]:
                continue
            
            for neighbor in graph[current_node]:
                distance = current_distance + 1  # Assuming unweighted graph
                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    heapq.heappush(priority_queue, (distance, neighbor))
        
        return False

```
```Java []
class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
            graph.computeIfAbsent(v, k -> new ArrayList<>()).add(u);
        }
        
        int[] distances = new int[n];
        Arrays.fill(distances, Integer.MAX_VALUE);
        distances[source] = 0;
        
        PriorityQueue<int[]> priorityQueue = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        priorityQueue.offer(new int[] {0, source});
        
        while (!priorityQueue.isEmpty()) {
            int[] current = priorityQueue.poll();
            int currentDistance = current[0];
            int currentNode = current[1];
            
            if (currentNode == destination) {
                return true;
            }
            
            if (currentDistance > distances[currentNode]) {
                continue;
            }
            
            for (int neighbor : graph.getOrDefault(currentNode, new ArrayList<>())) {
                int distance = currentDistance + 1; // Assuming unweighted graph
                if (distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                    priorityQueue.offer(new int[] {distance, neighbor});
                }
            }
        }
        
        return false;
    }
}
```
```C++ []
class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
        unordered_map<int, vector<int>> graph;
        for (const auto& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph[u].push_back(v);
            graph[v].push_back(u);
        }
        
        vector<int> distances(n, numeric_limits<int>::max());
        distances[source] = 0;
        
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> priorityQueue;
        priorityQueue.push({0, source});
        
        while (!priorityQueue.empty()) {
            auto current = priorityQueue.top();
            priorityQueue.pop();
            int currentDistance = current.first;
            int currentNode = current.second;
            
            if (currentNode == destination) {
                return true;
            }
            
            if (currentDistance > distances[currentNode]) {
                continue;
            }
            
            for (int neighbor : graph[currentNode]) {
                int distance = currentDistance + 1; // Assuming unweighted graph
                if (distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                    priorityQueue.push({distance, neighbor});
                }
            }
        }
        
        return false;
    }
};

```

# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA