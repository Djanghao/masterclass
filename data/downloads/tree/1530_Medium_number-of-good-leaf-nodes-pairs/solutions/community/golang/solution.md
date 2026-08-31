# ✅🚀💯 Ultimate 1-ms Solution | Beats 100% | Java C++ Py Js Go | Beginner-Friendly Explanation | 🔥🧠

**Author:** kartikdevsharma_
**Votes:** 43
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5493798/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5493798/)

---


![1ms.png](./images/0.png)

## Problem Statement (Explanation):

Imagine you have a family tree, but instead of people, it's made up of numbers. This tree is called a binary tree, which means each "parent" number can have at most two "child" numbers directly below it. 

In this tree, we're particularly interested in the "leaf" numbers. A leaf is a number that doesn't have any children below it - it's at the very bottom of the tree.

Now, we want to find pairs of these leaf numbers that are "close" to each other. How do we define "close"? We're given a number called "distance". Two leaf numbers are considered "close" or "good" if you can get from one to the other by moving up and down the tree, and the total number of moves is less than or equal to this "distance".

Your job is to count how many of these "good" pairs of leaf numbers exist in the tree.

For example, if we have a tree that looks like this:
```
    1
   / \\
  2   3
   \\
    4
```
And our "distance" is 3, we only have one "good" pair: 3 and 4. To get from 3 to 4, we go up to 1, then down to 2, then down to 4 - that's 3 moves, which is equal to our "distance".

---

## Approach 1 depth-first search (DFS) 


### Intuition:

The problem of counting good leaf node pairs in a binary tree requires us to understand the structure of the tree and efficiently calculate distances between leaf nodes. The key insights that drive our solution are:

1. Depth-First Search (DFS) Traversal:
   We can use a depth-first search approach to traverse the binary tree. This allows us to explore all paths from the root to the leaf nodes efficiently.

2. Bottom-up Calculation:
   Instead of calculating distances from the top down, we can build our solution from the bottom up. This means we start calculations from the leaf nodes and propagate information upwards to their ancestors.

3. Distance Array:
   At each node, we can maintain an array that keeps track of the number of leaf nodes at each distance from that node. This array acts as a summary of the subtree rooted at that node.

4. Pair Counting:
   When we reach a non-leaf node, we have information about leaf nodes in its left and right subtrees. We can use this information to count good pairs without needing to re-traverse the subtrees.

5. Constant-size Array:
   By using a constant-size array (based on the maximum possible distance), we can optimize memory usage and potentially improve cache performance.

### Approach:

1. Define a recursive DFS function that returns an array representing the count of leaf nodes at each distance for the subtree rooted at the current node.

2. Base cases:
   - If the node is null, return an empty array.
   - If the node is a leaf (both left and right children are null), return an array with 1 at index 1 (representing distance 1 from its parent).

3. Recursive step:
   - Recursively call the function on the left and right children.
   - Use the returned arrays to count good pairs:
     - For each possible pair of distances (i, j) where i is from the left subtree and j is from the right subtree, if i + j + 2 <= distance, count this as a good pair.
   - Combine the distance information from left and right subtrees:
     - Shift all distances by 1 (as we're moving one level up in the tree) and sum the counts.

4. Return the combined distance array for the current subtree.

5. The main function initiates the recursive call and returns the final count of good pairs.

### Time Complexity:

The time complexity of this solution is O(n * d^2), where n is the number of nodes in the tree and d is the given distance.

- We visit each node once during the DFS traversal: O(n)
- At each non-leaf node, we perform two nested loops, each running up to d times: O(d^2)
- The operations inside the loops (array access and arithmetic) are O(1)

Therefore, the overall time complexity is O(n * d^2).

### Space Complexity:

The space complexity is O(n * d), where n is the number of nodes and d is the given distance.

- The recursion stack can go as deep as the height of the tree, which in the worst case (a skewed tree) can be n. Each recursive call stores an array of size d+1.
- We don't create any additional data structures that grow with the input size.

Therefore, the space complexity is O(n * d) in the worst case.

### Dry Run:

Let's do a dry run of the algorithm with the following binary tree and distance = 3:

```
    1
   / \\
  2   3
 / \\
4   5
```

We'll represent the process in a tabular form, showing the state at each node as we perform the DFS:

| Node | Left Child | Right Child | Distance Array | Good Pairs Count | Notes |
|------|------------|-------------|-----------------|-------------------|-------|
| 4    | null       | null        | [0,1,0,0,0]     | 0                 | Leaf node |
| 5    | null       | null        | [0,1,0,0,0]     | 0                 | Leaf node |
| 2    | 4          | 5           | [0,0,2,0,0]     | 1                 | 1 good pair (4,5) |
| 3    | null       | null        | [0,1,0,0,0]     | 0                 | Leaf node |
| 1    | 2          | 3           | [0,0,1,2,0]     | 2                 | 1 new good pair (3,4 or 3,5) |

Detailed steps:

1. Node 4 (Leaf):
   - Returns [0,1,0,0,0] (1 leaf at distance 1 from parent)
   - No pairs counted

2. Node 5 (Leaf):
   - Returns [0,1,0,0,0] (1 leaf at distance 1 from parent)
   - No pairs counted

3. Node 2:
   - Left child (4) returned [0,1,0,0,0]
   - Right child (5) returned [0,1,0,0,0]
   - Counts pairs: 1 * 1 = 1 pair (distance 1 + 1 + 2 = 4, which is > 3, so not counted)
   - Combines and shifts distances: [0,0,2,0,0] (2 leaves at distance 2 from parent)
   - Good pairs count: 1

4. Node 3 (Leaf):
   - Returns [0,1,0,0,0] (1 leaf at distance 1 from parent)
   - No pairs counted

5. Node 1 (Root):
   - Left child (2) returned [0,0,2,0,0]
   - Right child (3) returned [0,1,0,0,0]
   - Counts pairs: 
     2 * 1 = 2 pairs (distance 2 + 1 + 2 = 5, which is > 3, so not counted)
     0 * 1 = 0 pairs (for other combinations)
   - Combines and shifts distances: [0,0,1,2,0] 
     (1 leaf at distance 2, 2 leaves at distance 3 from root)
   - Good pairs count: 1 + 2 = 3

Final result: 3 good pairs ((4,5), (3,4), (3,5))

This dry run illustrates how the algorithm traverses the tree, counts good pairs at each non-leaf node, and combines distance information as it moves up the tree. The final result correctly identifies all good leaf pairs within the given distance.

The approach efficiently solves the problem by:
1. Avoiding redundant calculations by summarizing subtree information.
2. Counting pairs without explicitly finding all paths between leaves.
3. Propagating distance information up the tree to enable efficient pair counting at higher levels.

This method balances time and space efficiency, making it suitable for trees of various sizes and structures. The use of a constant-size array (based on the maximum possible distance) helps in optimizing memory usage and potentially improving cache performance, which can lead to faster execution times in practice.

### Code

```java []
class Solution {
    private int count = 0;
    private final int MAX_DISTANCE = 10;

    public int countPairs(TreeNode root, int distance) {
        dfs(root, distance);
        return count;
    }

    private int[] dfs(TreeNode node, int distance) {
        if (node == null) return new int[MAX_DISTANCE + 1];
        
        if (node.left == null && node.right == null) {
            int[] res = new int[MAX_DISTANCE + 1];
            res[1] = 1;
            return res;
        }

        int[] left = dfs(node.left, distance);
        int[] right = dfs(node.right, distance);

        for (int i = 1; i <= distance; i++) {
            for (int j = 1; j <= distance - i; j++) {
                count += left[i] * right[j];
            }
        }

        int[] res = new int[MAX_DISTANCE + 1];
        for (int i = 1; i < MAX_DISTANCE; i++) {
            res[i + 1] = left[i] + right[i];
        }

        return res;
    }
}
```
```python []
#code 1
class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        self.count = 0
        MAX_DISTANCE = 10

        def dfs(node: TreeNode) -> List[int]:
            if not node:
                return [0] * (MAX_DISTANCE + 1)
            
            if not node.left and not node.right:
                res = [0] * (MAX_DISTANCE + 1)
                res[1] = 1
                return res
            
            left = dfs(node.left)
            right = dfs(node.right)
            
            for i in range(1, distance + 1):
                for j in range(1, distance - i + 1):
                    self.count += left[i] * right[j]
            
            res = [0] * (MAX_DISTANCE + 1)
            for i in range(1, MAX_DISTANCE):
                res[i + 1] = left[i] + right[i]
            
            return res

        dfs(root)
        return self.count
```

```python []
#code 2
class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        self.res = 0

        def solve(root):
            if root is None:
                return {}
            if root.left is None and root.right is None:
                return {1: 1}
            
            lhNodes = solve(root.left)            
            rhNodes = solve(root.right)
            
            for leftNodeHeight in lhNodes:
                for rightNodeHeight in rhNodes:
                    if leftNodeHeight + rightNodeHeight <= distance:
                        self.res += lhNodes[leftNodeHeight] * rhNodes[rightNodeHeight]

            nhNodes = {}
            for key in lhNodes:
                if key < distance:
                    nhNodes[key + 1] = lhNodes[key]
            for key in rhNodes:
                if key < distance:
                    nhNodes[key + 1] = nhNodes.get(key + 1, 0) + rhNodes[key]                    

            return nhNodes

        solve(root)
        return self.res


```
```C++ []
class Solution {
private:
    int count = 0;
    const int MAX_DISTANCE = 10;

    vector<int> dfs(TreeNode* node, int distance) {
        if (!node) return vector<int>(MAX_DISTANCE + 1, 0);
        
        if (!node->left && !node->right) {
            vector<int> res(MAX_DISTANCE + 1, 0);
            res[1] = 1;
            return res;
        }
        
        vector<int> left = dfs(node->left, distance);
        vector<int> right = dfs(node->right, distance);
        
        for (int i = 1; i <= distance; i++) {
            for (int j = 1; j <= distance - i; j++) {
                count += left[i] * right[j];
            }
        }
        
        vector<int> res(MAX_DISTANCE + 1, 0);
        for (int i = 1; i < MAX_DISTANCE; i++) {
            res[i + 1] = left[i] + right[i];
        }
        
        return res;
    }

public:
    int countPairs(TreeNode* root, int distance) {
        dfs(root, distance);
        return count;
    }
};
```
```Js []
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let count = 0;
    const MAX_DISTANCE = 10;

    function dfs(node) {
        if (!node) return new Array(MAX_DISTANCE + 1).fill(0);
        
        if (!node.left && !node.right) {
            const res = new Array(MAX_DISTANCE + 1).fill(0);
            res[1] = 1;
            return res;
        }
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        for (let i = 1; i <= distance; i++) {
            for (let j = 1; j <= distance - i; j++) {
                count += left[i] * right[j];
            }
        }
        
        const res = new Array(MAX_DISTANCE + 1).fill(0);
        for (let i = 1; i < MAX_DISTANCE; i++) {
            res[i + 1] = left[i] + right[i];
        }
        
        return res;
    }

    dfs(root);
    return count;
};

```
```Go []
func countPairs(root *TreeNode, distance int) int {
    count := 0
    const MAX_DISTANCE = 10

    var dfs func(*TreeNode) []int
    dfs = func(node *TreeNode) []int {
        if node == nil {
            return make([]int, MAX_DISTANCE+1)
        }
        
        if node.Left == nil && node.Right == nil {
            res := make([]int, MAX_DISTANCE+1)
            res[1] = 1
            return res
        }
        
        left := dfs(node.Left)
        right := dfs(node.Right)
        
        for i := 1; i <= distance; i++ {
            for j := 1; j <= distance-i; j++ {
                count += left[i] * right[j]
            }
        }
        
        res := make([]int, MAX_DISTANCE+1)
        for i := 1; i < MAX_DISTANCE; i++ {
            res[i+1] = left[i] + right[i]
        }
        
        return res
    }

    dfs(root)
    return count
}
```
### PS: For Python code 1 and 2
Code 1 and Code 2 both aim to solve the same problem: counting pairs of nodes in a binary tree such that the distance between them is less than or equal to a given distance. However, they implement slightly different approaches and algorithms to achieve this.

### Key Differences:

1. **DFS Implementation and Node Representation:**
   - **Code 1:** Uses an array representation (`List[int]`) to keep track of counts at each distance level. It calculates the counts by iterating through possible combinations of distances between nodes in the left and right subtrees.
   - **Code 2:** Uses a dictionary (`Dict[int, int]`) to maintain counts of nodes at each height level from the current node. It calculates pairs by iterating through all possible pairs of heights from left and right subtrees and checking if their sum is within the allowed distance.

2. **Counting Logic:**
   - **Code 1:** Counts pairs directly within the `dfs` function using nested loops to iterate through possible distances.
   - **Code 2:** Counts pairs indirectly by accumulating counts (`self.res`) in the `solve` function whenever pairs meet the distance criteria.

3. **Recursive Structure:**
   - **Code 1:** Uses a recursive function `dfs` that computes and returns an array representing node counts at each distance level.
   - **Code 2:** Also uses a recursive function `solve`, but it returns a dictionary representing node counts at each height level, and it accumulates results (`self.res`) directly within the recursion.

### Approach Similarities:

- Both implementations use depth-first search (DFS) to traverse the tree.
- They both handle the base case of leaf nodes by returning a dictionary or array representing node heights or distances.



The primary differences lie in how they maintain and utilize node information (array vs dictionary) and how they accumulate counts of valid node pairs (direct counting in loops vs accumulation in a class attribute). Both approaches are valid and efficient for the problem at hand, but Code 2 might be slightly more intuitive in terms of understanding how pairs are counted due to its direct accumulation of results during recursion.

---

## Approach 2: Graph Conversion + BFS 
### Intuition:
Imagine you're trying to find the shortest path between two houses in a neighborhood. In a tree, it's like all the roads are one-way streets going down. That makes it hard to go back up! So, we're going to turn our tree into a map where we can go in both directions between connected numbers. Then, we'll use a special way of exploring this map to find the shortest paths between our leaf numbers.

### Approach:
1. First, we're going to make a list of all the leaf numbers in our tree.
2. Then, we'll turn our tree into a map where we can easily see which numbers are connected to each other, regardless of whether they're above or below in the original tree.
3. For each leaf number, we're going to explore the map, keeping track of how far we've gone. We'll stop exploring when we've gone farther than our "distance" limit.
4. Whenever we find another leaf number within our "distance" limit, we count it as a "good" pair.
5. Finally, we'll divide our total count by 2 (because we counted each pair twice - once from each direction).
### Code
```java []

class Solution {

    public int countPairs(TreeNode root, int distance) {
        Map<TreeNode, List<TreeNode>> graph = new HashMap<>();
        Set<TreeNode> leafNodes = new HashSet<>();

        traverseTree(root, null, graph, leafNodes);

        int ans = 0;

        for (TreeNode leaf : leafNodes) {
            Queue<TreeNode> bfsQueue = new LinkedList<>();
            Set<TreeNode> seen = new HashSet<>();
            bfsQueue.add(leaf);
            seen.add(leaf);
            // Go through all nodes that are within the given distance of
            // the current leaf node
            for (int i = 0; i <= distance; i++) {
                // Clear all nodes in the queue (distance i away from leaf node)
                // Add the nodes' neighbors (distance i+1 away from leaf node)
                int size = bfsQueue.size();
                for (int j = 0; j < size; j++) {
                    // If current node is a new leaf node, add the found pair to our count
                    TreeNode currNode = bfsQueue.remove();
                    if (leafNodes.contains(currNode) && currNode != leaf) {
                        ans++;
                    }
                    if (graph.containsKey(currNode)) {
                        for (TreeNode neighbor : graph.get(currNode)) {
                            if (!seen.contains(neighbor)) {
                                bfsQueue.add(neighbor);
                                seen.add(neighbor);
                            }
                        }
                    }
                }
            }
        }
        return ans / 2;
    }

    private void traverseTree(
        TreeNode currNode,
        TreeNode prevNode,
        Map<TreeNode, List<TreeNode>> graph,
        Set<TreeNode> leafNodes
    ) {
        if (currNode == null) {
            return;
        }
        if (currNode.left == null && currNode.right == null) {
            leafNodes.add(currNode);
        }
        if (prevNode != null) {
            graph.computeIfAbsent(prevNode, k -> new ArrayList<TreeNode>());
            graph.get(prevNode).add(currNode);
            graph.computeIfAbsent(currNode, k -> new ArrayList<TreeNode>());
            graph.get(currNode).add(prevNode);
        }
        traverseTree(currNode.left, currNode, graph, leafNodes);
        traverseTree(currNode.right, currNode, graph, leafNodes);
    }
}
```
```python []
from collections import defaultdict, deque

class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        graph = defaultdict(list)
        leaf_nodes = set()

        def traverse_tree(curr_node, prev_node):
            if not curr_node:
                return
            if not curr_node.left and not curr_node.right:
                leaf_nodes.add(curr_node)
            if prev_node:
                graph[prev_node].append(curr_node)
                graph[curr_node].append(prev_node)
            traverse_tree(curr_node.left, curr_node)
            traverse_tree(curr_node.right, curr_node)

        traverse_tree(root, None)

        ans = 0
        for leaf in leaf_nodes:
            bfs_queue = deque([leaf])
            seen = {leaf}
            for i in range(distance + 1):
                size = len(bfs_queue)
                for _ in range(size):
                    curr_node = bfs_queue.popleft()
                    if curr_node in leaf_nodes and curr_node != leaf:
                        ans += 1
                    for neighbor in graph[curr_node]:
                        if neighbor not in seen:
                            bfs_queue.append(neighbor)
                            seen.add(neighbor)

        return ans // 2

```
```C++ []
class Solution {
public:
    int countPairs(TreeNode* root, int distance) {
        unordered_map<TreeNode*, vector<TreeNode*>> graph;
        unordered_set<TreeNode*> leafNodes;

        traverseTree(root, nullptr, graph, leafNodes);

        int ans = 0;
        for (TreeNode* leaf : leafNodes) {
            queue<TreeNode*> bfsQueue;
            unordered_set<TreeNode*> seen;
            bfsQueue.push(leaf);
            seen.insert(leaf);

            for (int i = 0; i <= distance; i++) {
                int size = bfsQueue.size();
                for (int j = 0; j < size; j++) {
                    TreeNode* currNode = bfsQueue.front();
                    bfsQueue.pop();
                    if (leafNodes.count(currNode) && currNode != leaf) {
                        ans++;
                    }
                    if (graph.count(currNode)) {
                        for (TreeNode* neighbor : graph[currNode]) {
                            if (!seen.count(neighbor)) {
                                bfsQueue.push(neighbor);
                                seen.insert(neighbor);
                            }
                        }
                    }
                }
            }
        }
        return ans / 2;
    }

private:
    void traverseTree(TreeNode* currNode, TreeNode* prevNode, 
                      unordered_map<TreeNode*, vector<TreeNode*>>& graph, 
                      unordered_set<TreeNode*>& leafNodes) {
        if (!currNode) return;
        if (!currNode->left && !currNode->right) {
            leafNodes.insert(currNode);
        }
        if (prevNode) {
            graph[prevNode].push_back(currNode);
            graph[currNode].push_back(prevNode);
        }
        traverseTree(currNode->left, currNode, graph, leafNodes);
        traverseTree(currNode->right, currNode, graph, leafNodes);
    }
};

```
```Js []
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    const graph = new Map();
    const leafNodes = new Set();

    const traverseTree = (currNode, prevNode) => {
        if (!currNode) return;
        if (!currNode.left && !currNode.right) {
            leafNodes.add(currNode);
        }
        if (prevNode) {
            if (!graph.has(prevNode)) graph.set(prevNode, []);
            if (!graph.has(currNode)) graph.set(currNode, []);
            graph.get(prevNode).push(currNode);
            graph.get(currNode).push(prevNode);
        }
        traverseTree(currNode.left, currNode);
        traverseTree(currNode.right, currNode);
    };

    traverseTree(root, null);

    let ans = 0;
    for (const leaf of leafNodes) {
        const bfsQueue = [leaf];
        const seen = new Set([leaf]);
        for (let i = 0; i <= distance; i++) {
            const size = bfsQueue.length;
            for (let j = 0; j < size; j++) {
                const currNode = bfsQueue.shift();
                if (leafNodes.has(currNode) && currNode !== leaf) {
                    ans++;
                }
                if (graph.has(currNode)) {
                    for (const neighbor of graph.get(currNode)) {
                        if (!seen.has(neighbor)) {
                            bfsQueue.push(neighbor);
                            seen.add(neighbor);
                        }
                    }
                }
            }
        }
    }
    return Math.floor(ans / 2);
};

```
```Go []
func countPairs(root *TreeNode, distance int) int {
    graph := make(map[*TreeNode][]*TreeNode)
    leafNodes := make(map[*TreeNode]bool)

    var traverseTree func(*TreeNode, *TreeNode)
    traverseTree = func(currNode, prevNode *TreeNode) {
        if currNode == nil {
            return
        }
        if currNode.Left == nil && currNode.Right == nil {
            leafNodes[currNode] = true
        }
        if prevNode != nil {
            graph[prevNode] = append(graph[prevNode], currNode)
            graph[currNode] = append(graph[currNode], prevNode)
        }
        traverseTree(currNode.Left, currNode)
        traverseTree(currNode.Right, currNode)
    }

    traverseTree(root, nil)

    ans := 0
    for leaf := range leafNodes {
        bfsQueue := []*TreeNode{leaf}
        seen := make(map[*TreeNode]bool)
        seen[leaf] = true

        for i := 0; i <= distance; i++ {
            size := len(bfsQueue)
            for j := 0; j < size; j++ {
                currNode := bfsQueue[0]
                bfsQueue = bfsQueue[1:]
                if leafNodes[currNode] && currNode != leaf {
                    ans++
                }
                for _, neighbor := range graph[currNode] {
                    if !seen[neighbor] {
                        bfsQueue = append(bfsQueue, neighbor)
                        seen[neighbor] = true
                    }
                }
            }
        }
    }
    return ans / 2
}

```
### Complexity Analysis
Let N be the size of the binary tree given by root.

### Time Complexity: O(N^2)

Traversing the tree to build the graph and find the list of leaf nodes takes O(N) time. This is because there are N total nodes to process and each node takes constant time to be processed (adding to the graph and set are constant time operations).

BFS runs for each leaf node in the binary tree. The number of leaf nodes is linearly proportional to the total size of the tree. In the worst case, each BFS traversal covers the entire graph, which takes O(N) time. Therefore, the overall time complexity is O(N^2).

### Space Complexity: O(N)

The adjacency list, set of leaf nodes, BFS queue, and BFS seen set all require O(N) space individually. Therefore, the overall space complexity remains O(N)

---

## Approach 3: Post-Order Traversal 
### Intuition:
Think of this like planning a family reunion. You want to find pairs of cousins (leaf numbers) who are "close" to each other in the family tree. The best way to do this is to start with the youngest generation (at the bottom of the tree) and work your way up, keeping track of how many descendants are at each level below you.

### Approach:
1. We start at the bottom of the tree and work our way up.
2. For each number in the tree, we figure out:
   - How many leaf numbers are below it at each distance (0 steps away, 1 step away, 2 steps away, etc.)
   - How many "good" pairs of leaf numbers are in its family (below it in the tree)
3. When we're at a number, we look at the information from its left and right "children":
   - We shift all the distances up by 1 (because we've moved up one level in the tree)
   - We count new "good" pairs by looking at all possible combinations of leaf numbers from the left and right sides
4. We keep doing this until we reach the top of the tree, where we'll have our final count of all "good" pairs.

### Code
```java []
class Solution {

    public int countPairs(TreeNode root, int distance) {
        return postOrder(root, distance)[11];
    }

    private int[] postOrder(TreeNode currentNode, int distance) {
        if (currentNode == null) return new int[12];
        else if (currentNode.left == null && currentNode.right == null) {
            int[] current = new int[12];
            // Leaf node's distance from itself is 0
            current[0] = 1;
            return current;
        }

        // Leaf node count for a given distance i
        int[] left = postOrder(currentNode.left, distance);
        int[] right = postOrder(currentNode.right, distance);

        int[] current = new int[12];

        // Combine the counts from the left and right subtree and shift by
        // +1 distance
        for (int i = 0; i < 10; i++) {
            current[i + 1] += left[i] + right[i];
        }

        // Initialize to total number of good leaf nodes pairs from left and right subtrees.
        current[11] += left[11] + right[11];

        // Iterate through possible leaf node distance pairs
        for (int d1 = 0; d1 <= distance; d1++) {
            for (int d2 = 0; d2 <= distance; d2++) {
                if (2 + d1 + d2 <= distance) {
                    // If the total path distance is less than the given distance limit,
                    // then add to the total number of good pairs
                    current[11] += left[d1] * right[d2];
                }
            }
        }

        return current;
    }
}

```
```python []

class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        def postOrder(node: TreeNode) -> List[int]:
            if not node:
                return [0] * 12
            if not node.left and not node.right:
                current = [0] * 12
                current[0] = 1
                return current
            
            left = postOrder(node.left)
            right = postOrder(node.right)
            
            current = [0] * 12
            
            for i in range(10):
                current[i + 1] += left[i] + right[i]
            
            current[11] += left[11] + right[11]
            
            for d1 in range(distance + 1):
                for d2 in range(distance + 1):
                    if 2 + d1 + d2 <= distance:
                        current[11] += left[d1] * right[d2]
            
            return current
        
        return postOrder(root)[11]
```
```C++ []
class Solution {
public:
    int countPairs(TreeNode* root, int distance) {
        return postOrder(root, distance)[11];
    }
    
private:
    vector<int> postOrder(TreeNode* node, int distance) {
        if (!node) return vector<int>(12, 0);
        if (!node->left && !node->right) {
            vector<int> current(12, 0);
            current[0] = 1;
            return current;
        }
        
        vector<int> left = postOrder(node->left, distance);
        vector<int> right = postOrder(node->right, distance);
        
        vector<int> current(12, 0);
        
        for (int i = 0; i < 10; i++) {
            current[i + 1] += left[i] + right[i];
        }
        
        current[11] += left[11] + right[11];
        
        for (int d1 = 0; d1 <= distance; d1++) {
            for (int d2 = 0; d2 <= distance; d2++) {
                if (2 + d1 + d2 <= distance) {
                    current[11] += left[d1] * right[d2];
                }
            }
        }
        
        return current;
    }
};

```
```Js []
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    function postOrder(node) {
        if (!node) return new Array(12).fill(0);
        if (!node.left && !node.right) {
            let current = new Array(12).fill(0);
            current[0] = 1;
            return current;
        }
        
        let left = postOrder(node.left);
        let right = postOrder(node.right);
        
        let current = new Array(12).fill(0);
        
        for (let i = 0; i < 10; i++) {
            current[i + 1] += left[i] + right[i];
        }
        
        current[11] += left[11] + right[11];
        
        for (let d1 = 0; d1 <= distance; d1++) {
            for (let d2 = 0; d2 <= distance; d2++) {
                if (2 + d1 + d2 <= distance) {
                    current[11] += left[d1] * right[d2];
                }
            }
        }
        
        return current;
    }
    
    return postOrder(root)[11];
};
```
```Go []

func countPairs(root *TreeNode, distance int) int {
    var postOrder func(*TreeNode) []int
    postOrder = func(node *TreeNode) []int {
        if node == nil {
            return make([]int, 12)
        }
        if node.Left == nil && node.Right == nil {
            current := make([]int, 12)
            current[0] = 1
            return current
        }
        
        left := postOrder(node.Left)
        right := postOrder(node.Right)
        
        current := make([]int, 12)
        
        for i := 0; i < 10; i++ {
            current[i+1] += left[i] + right[i]
        }
        
        current[11] += left[11] + right[11]
        
        for d1 := 0; d1 <= distance; d1++ {
            for d2 := 0; d2 <= distance; d2++ {
                if 2+d1+d2 <= distance {
                    current[11] += left[d1] * right[d2]
                }
            }
        }
        
        return current
    }
    
    return postOrder(root)[11]
}
```
### Complexity Analysis
Let N be the size of the binary tree rooted at root, D be the maximum distance given by distance, and H be the height of the binary tree.

### Time Complexity: O(N\u22C5D^2)

The post-order traversal visits each node, which will take O(N) linear time. At each node, constructing the current array involves iterating through the left and right arrays, and checking distance pairs to find paths within distance. Given the constant size (12), constructing current is O(1).

Checking distance pairs takes O(D^2) time. Therefore, the total time complexity is O(N\u22C5 D^2).

### Space Complexity: O(H)

The recursion call stack, current array, left array, and right array all contribute to the space complexity. The maximum depth of the call stack will be proportional to the height of the tree. The arrays (current, left, right) have constant space (12 elements), O(1). Thus, the overall space complexity is O(H).

