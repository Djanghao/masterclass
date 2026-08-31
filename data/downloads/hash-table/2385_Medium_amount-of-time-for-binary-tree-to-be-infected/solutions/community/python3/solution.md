# ✅Beats 100% - Breadth-First Search - Explained with [ Video ] - C++/Java/Python/JS

**Author:** lancertech6
**Votes:** 147
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4537896/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4537896/)

---

![Screenshot 2024-01-10 060353.png](./images/0.png)

# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

<!-- https://www.youtube.com/watch?v=ujU-jeO1v-k -->

https://youtu.be/2mLQoPRZRLQ

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 1400 Subscribers*
*Current Subscribers: 1329*

---

# Intution
   - The key to solving this problem is to consider the binary tree as an undirected graph, where an edge exists between parent and child nodes.
   - Perform a breadth-first search (BFS) starting from the start node since BFS processes nodes level by level, which naturally aligns with the passage of minutes as the infection spreads.

# Approach
<!-- Describe your approach to solving the problem. -->
- **Graph Construction:**
    - The solution creates a graph representation of the tree using a default dictionary `g` of lists in the `dfs` (Depth-First Search) function.
      ```python
      def dfs(root):
          if root is None:
              return
          if root.left:
              g[root.val].append(root.left.val)
              g[root.left.val].append(root.val)
          if root.right:
              g[root.val].append(root.right.val)
              g[root.right.val].append(root.val)
          dfs(root.left)
          dfs(root.right)
      ```
   - **Initialization:**
      - Initialize an empty set `vis` to keep track of visited nodes (infected nodes) and a queue `q` to maintain the BFS's order of node processing, with the start node as the initial node to be processed.
      
      ```python
      vis = set()
      q = deque([start])
      ```

   - **BFS Algorithm:**
      - The solution sets up a while loop that continues until the queue `q` is empty, signifying that there are no more nodes to be infected.
      ```python
      ans = -1
      while q:
          ans += 1
          for _ in range(len(q)):
              i = q.popleft()
              vis.add(i)
              for j in g[i]:
                  if j not in vis:
                      q.append(j)
      ```
      - Inside the loop, `ans` is incremented to count the minutes.
      - For each iteration of the while loop, it processes all nodes currently in the queue, which are the nodes that got infected in the previous minute.
      - It pops each node from the queue, adds it to the `vis` set, and then iterates over its adjacent nodes. If any adjacent node has not been visited (infected), it is added to the queue to be processed in the next minute.

   - **Return Value:**
      - By the end of the BFS loop, `ans` holds the number of minutes it took to infect the entire tree since each loop iteration represents one minute of infection time passing.
      - The return value `ans` represents the required number of minutes for the infection to spread through the entire tree, as determined by our BFS algorithm.
      ```python
      return ans
      ```

# Complexity
- Time complexity: The time complexity of the provided code is O(N) where N is the number of nodes in the tree
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity of the code is also O(N) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private Map<Integer, List<Integer>> adjacencyList = new HashMap<>();

    public int amountOfTime(TreeNode root, int start) {
        convertToGraph(root);
        Deque<Integer> queue = new ArrayDeque<>();
        Set<Integer> visited = new HashSet<>();
      
        queue.offer(start);
        int time = -1; 
      
        while (!queue.isEmpty()) {
            time++;
            for (int i = queue.size(); i > 0; i--) {
                int currentNode = queue.pollFirst();
                visited.add(currentNode);
              
                if (adjacencyList.containsKey(currentNode)) {
                    for (int neighbor : adjacencyList.get(currentNode)) {
                        if (!visited.contains(neighbor)) {
                            queue.offer(neighbor);
                        }
                    }
                }
            }
        }
        return time;
    }

    private void convertToGraph(TreeNode node) {
        if (node == null) {
            return;
        }
      
        if (node.left != null) {
            adjacencyList.computeIfAbsent(node.val, k -> new ArrayList<>()).add(node.left.val);
            adjacencyList.computeIfAbsent(node.left.val, k -> new ArrayList<>()).add(node.val);
        }
      
        if (node.right != null) {
            adjacencyList.computeIfAbsent(node.val, k -> new ArrayList<>()).add(node.right.val);
            adjacencyList.computeIfAbsent(node.right.val, k -> new ArrayList<>()).add(node.val);
        }
      
        
        convertToGraph(node.left);
        convertToGraph(node.right);
    }
}
```
```C++ []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    unordered_map<int, vector<int>> graph;

    int amountOfTime(TreeNode* root, int start) {
        constructGraph(root);

        queue<int> q;
        q.push(start);

        unordered_set<int> visited;

        int minutesPassed = -1;

        while (!q.empty()) {
            ++minutesPassed;
            for (int levelSize = q.size(); levelSize > 0; --levelSize) {
                int currentNode = q.front();
                q.pop();
                visited.insert(currentNode);
                for (int adjacentNode : graph[currentNode]) {
                    if (!visited.count(adjacentNode)) {
                        q.push(adjacentNode);
                    }
                }
            }
        }

        return minutesPassed;
    }

    void constructGraph(TreeNode* root) {
        if (!root) return;

        if (root->left) {
            graph[root->val].push_back(root->left->val);
            graph[root->left->val].push_back(root->val);
        }

        if (root->right) {
            graph[root->val].push_back(root->right->val);
            graph[root->right->val].push_back(root->val);
        }

        constructGraph(root->left);
        constructGraph(root->right);
    }
};
```
```Python []
class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        def dfs(node):
            if node is None:
                return
            if node.left:
                graph[node.val].append(node.left.val)
                graph[node.left.val].append(node.val)
            if node.right:
                graph[node.val].append(node.right.val)
                graph[node.right.val].append(node.val)
            dfs(node.left)
            dfs(node.right)

        graph = defaultdict(list)
        dfs(root)
        visited = set()
        queue = deque([start])
        time = -1
        while queue:
            time += 1
            for _ in range(len(queue)):
                current_node = queue.popleft()
                visited.add(current_node)
                for neighbor in graph[current_node]:
                    if neighbor not in visited:
                        queue.append(neighbor)
        return time
```
```JavaScript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
const amountOfTime = (root, start) => {
    let amount = 0;
    const traverse = (root, start) => {
        if (!root) {
            return 0;
        }

        let left = traverse(root.left, start);
        let right = traverse(root.right, start);

        if (root.val === start) {
            amount = Math.max(left, right);
            return -1;
        } else if (left >= 0 && right >= 0) {
            return Math.max(left, right) + 1;
        } else {
            amount = Math.max(amount, Math.abs(left - right));
            return Math.min(left, right) - 1;
        }
    }
    traverse(root, start)
    
    return amount;
}
```
![upvote.png](./images/1.png)
