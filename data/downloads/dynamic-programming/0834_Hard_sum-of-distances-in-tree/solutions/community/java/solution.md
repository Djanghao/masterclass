# 💯Faster✅💯 Lesser✅Detailed Explaination🎯DFS🧠Step-by-Step Explaination✅Python🐍Java🍵C+

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 109
**Link:** [https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5082385/](https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5082385/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
Given a tree represented by its edges and the number of nodes `n`, the task is to find the sum of distances between all pairs of nodes in the tree.

### \uD83D\uDCE5Input:
- `n`: An integer representing the number of nodes in the tree.
- `edges`: A list of lists representing the edges of the tree. Each sublist `[u, v]` indicates an edge between node `u` and node `v`.

### \uD83D\uDCE4Output:
- A list of integers representing the sum of distances between all pairs of nodes.


# \uD83E\uDDE0Thinking Behind the Solution:
1. **Understanding the Problem**: When I encountered the problem, it was clear that I needed to find the sum of distances from each node to all other nodes in the tree. This indicated that traversing the tree and gathering information about distances would be crucial.

2. **Properties of Trees**: I recognized that in a tree, there exists only one path between any two nodes. This simplified the problem compared to a general graph.

3. **DFS for Tree Traversal**: Given the nature of the problem and the structure of a tree, DFS felt like a natural choice for tree traversal. It allowed me to explore the tree deeply before backtracking, visiting each node exactly once.

4. **Counting Nodes and Distances**: During my DFS traversal, I decided to keep track of two important pieces of information:
   - `count[node]`: The number of nodes in the subtree rooted at `node`.
   - `res[node]`: The sum of distances of all nodes in the subtree rooted at `node`.

5. **DFS to Calculate Counts and Distances**: By recursively traversing the tree using DFS, I calculated `count[node]` and `res[node]` for each node. Starting from the root and moving downwards, I updated these values as I progressed.

6. **Second DFS for Adjustments**: After the first DFS, I needed to adjust the `res` values to account for distances from each node to all other nodes. This adjustment was done in a second DFS traversal, where I updated the `res` values based on the counts calculated earlier.

7. **Handling Parent-Child Relationships**: During DFS, it was crucial to avoid revisiting the parent node. I ensured this by checking if the current child node was not equal to the parent node.

8. **Returning the Result**: Once both DFS traversals were complete, I had the required `res` values, representing the sum of distances for each node. I returned this as the final result.
# \u2705Approach:

#### 1. Building the Graph:
   - First, we need to represent the tree as a graph. Since the problem specifies a tree, we know it's acyclic and has only one path between any two nodes. Hence, we can represent it as an undirected graph.
   - We create an adjacency list representation of the graph using a dictionary (`graph`), where each node `u` is a key, and its adjacent nodes are stored in a list.

#### 2. DFS Traversal to Calculate Counts and Partial Distances:
   - We perform a Depth-First Search (DFS) traversal starting from the root (node 0).
   - During this traversal, we calculate two important pieces of information for each node:
     - `count[node]`: The number of nodes in the subtree rooted at `node`.
     - `res[node]`: The sum of distances of all nodes in the subtree rooted at `node`.
   - We update these values as we traverse the tree recursively, going deeper into the tree structure.

#### 3. Second DFS Traversal for Adjustments:
   - After the initial DFS traversal, we need to adjust the `res` values to represent the distances from each node to all other nodes.
   - We perform a second DFS traversal starting from the root (node 0).
   - During this traversal, for each child of a node `node`, we update its `res` value using the parent's `res` value. We subtract the count of nodes in the subtree rooted at the child (`count[child]`) and add the count of nodes not in the subtree (`n - count[child]`).
   - This adjustment accounts for the distances from the current node to all other nodes in the tree.

#### 4. Return the Result:
   - After both DFS traversals are complete, we have the required `res` values, representing the sum of distances for each node.
   - We return this list of `res` values as the final result.

<!-- # Time Complexity:
- Constructing the graph: O(n), where n is the number of nodes.
- Performing DFS traversals: O(n), as each node is visited exactly once.
- Overall time complexity: O(n).

### Space Complexity:
- Space required for the graph representation: O(n).
- Space required for the `count` and `res` arrays: O(n).
- Overall space complexity: O(n). -->

<!-- # Let's walkthrough\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F the implementation process with an example for better understanding\uD83C\uDFAF:

Let's use the input `[17, 13, 11, 2, 3, 5, 7]` and go through each step of the simulation to reveal the cards in increasing order.

### Input:
Deck: `[17, 13, 11, 2, 3, 5, 7]`

### Step-by-Step Simulation:
1. **Sort the Deck**:
   - Sorted Deck: `[2, 3, 5, 7, 11, 13, 17]`

2. **Initialize Variables**:
   - `deck`: `[2, 3, 5, 7, 11, 13, 17]`
   - `n` (size of deck): `7`
   - `result`: `[0, 0, 0, 0, 0, 0, 0]` (initialized with zeros)
   - `indices`: `deque([0, 1, 2, 3, 4, 5, 6])`

### Simulation Process:

#### 1st Card (`2`):
- `card`: `2`
- `idx` (popped from `indices`): `0`
- `result` after assigning `2` at `idx`: `[2, 0, 0, 0, 0, 0, 0]`
- `indices` after moving `next index: 1` to the end: `deque([2, 3, 4, 5, 6, 1])`

#### 2nd Card (`3`):
- `card`: `3`
- `idx` (popped from `indices`): `2`
- `result` after assigning `3` at `idx`: `[2, 0, 3, 0, 0, 0, 0]`
- `indices` after moving `next index: 3` to the end: `deque([4, 5, 6, 1, 3])`

#### 3rd Card (`5`):
- `card`: `5`
- `idx` (popped from `indices`): `4`
- `result` after assigning `5` at `idx`: `[2, 0, 3, 0, 5, 0, 0]`
- `indices` after moving `next index: 5` to the end: `deque([6, 1, 3, 5])`

#### 4th Card (`7`):
- `card`: `7`
- `idx` (popped from `indices`): `6`
- `result` after assigning `7` at `idx`: `[2, 0, 3, 0, 5, 0, 7]`
- `indices` after moving `3` to the end: `deque([3, 5, 1])`

#### 5th Card (`11`):
- `card`: `11`
- `idx` (popped from `indices`): `3`
- `result` after assigning `11` at `idx`: `[2, 0, 3, 11, 5, 0, 7]`
- `indices` after moving `4` to the end: `deque([1, 5])`

#### 6th Card (`13`):
- `card`: `13`
- `idx` (popped from `indices`): `1`
- `result` after assigning `13` at `idx`: `[2, 13, 3, 11, 5, 0, 7]`
- `indices` after moving `5` to the end: `deque([5])`

#### 7th Card (`17`):
- `card`: `17`
- `idx` (popped from `indices`): `6`
- `result` after assigning `17` at `idx`: `[2, 13, 3, 11, 5, 17, 7]`
- `indices` after moving `6` to the end: `deque([])`

### Final Result:
The `result` array after simulating the process will be `[2, 13, 3, 11, 5, 17, 7]`, which represents the deck of cards revealed in increasing order. -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def sumOfDistancesInTree(self, n: int, edges: List[List[int]]) -> List[int]:
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        count = [1] * n
        res = [0] * n

        def dfs(node, parent):
            for child in graph[node]:
                if child != parent:
                    dfs(child, node)
                    count[node] += count[child]
                    res[node] += res[child] + count[child]

        def dfs2(node, parent):
            for child in graph[node]:
                if child != parent:
                    res[child] = res[node] - count[child] + (n - count[child])
                    dfs2(child, node)

        dfs(0, -1)
        dfs2(0, -1)
        
        return res
```
```Java []
class Solution {
    private Map<Integer, List<Integer>> graph;
    private int[] count;
    private int[] res;

    private void dfs(int node, int parent) {
        for (int child : graph.get(node)) {
            if (child != parent) {
                dfs(child, node);
                count[node] += count[child];
                res[node] += res[child] + count[child];
            }
        }
    }

    private void dfs2(int node, int parent) {
        for (int child : graph.get(node)) {
            if (child != parent) {
                res[child] = res[node] - count[child] + (count.length - count[child]);
                dfs2(child, node);
            }
        }
    }

    public int[] sumOfDistancesInTree(int n, int[][] edges) {
        graph = new HashMap<>();
        count = new int[n];
        res = new int[n];
        Arrays.fill(count, 1);
        
        for (int i = 0; i < n; i++) {
            graph.put(i, new ArrayList<>());
        }

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph.get(u).add(v);
            graph.get(v).add(u);
        }

        dfs(0, -1);
        dfs2(0, -1);

        return res;
    }
}

```
```C++ []
class Solution {
private:
    unordered_map<int, vector<int>> graph;
    vector<int> count;
    vector<int> res;

    void dfs(int node, int parent) {
        for (int child : graph[node]) {
            if (child != parent) {
                dfs(child, node);
                count[node] += count[child];
                res[node] += res[child] + count[child];
            }
        }
    }

    void dfs2(int node, int parent) {
        for (int child : graph[node]) {
            if (child != parent) {
                res[child] = res[node] - count[child] + (count.size() - count[child]);
                dfs2(child, node);
            }
        }
    }

public:
    vector<int> sumOfDistancesInTree(int n, vector<vector<int>>& edges) {
        graph.clear();
        count = vector<int>(n, 1);
        res = vector<int>(n, 0);

        for (auto& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph[u].push_back(v);
            graph[v].push_back(u);
        }

        dfs(0, -1);
        dfs2(0, -1);

        return res;
    }
};
```
# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA