# Python Straight Forward BFS and DFS Solutions

**Author:** Katie_F
**Votes:** 93
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/654172/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/654172/)

---

Two solutions have the same idea:
* Iterate the whole tree looking for the target(x and y) - either BFS or DFS
	* once found, store `(parent, depth)` as a tuple
* Compare the parents and depth of two nodes found and get result

**BFS**
```python
class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
		# store (parent, depth) tuple
        res = []
		
		# bfs
        queue = deque([(root, None, 0)])        
        while queue:
			# minor optimization to stop early if both targets found
            if len(res) == 2:
                break
            node, parent, depth = queue.popleft()
            # if target found
            if node.val == x or node.val == y:
                res.append((parent, depth))
            if node.left:
                queue.append((node.left, node, depth + 1))
            if node.right:
                queue.append((node.right, node, depth + 1))

		# unpack two nodes
        node_x, node_y = res
		
		# compare and decide whether two nodes are cousins		
        return node_x[0] != node_y[0] and node_x[1] == node_y[1]
```

**DFS**
```python
class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
		# store (parent, depth) tuple
		res = [] 
        
		# dfs
        def dfs(node, parent, depth):
            if not node:
                return
            if node.val == x or node.val == y:
                res.append((parent, depth))
            dfs(node.left, node, depth + 1)
            dfs(node.right, node, depth + 1)
            
        dfs(root, None, 0)

		# unpack two nodes found
        node_x, node_y = res  
		
		# compare and decide whether two nodes are cousins
        return node_x[0] != node_y[0] and node_x[1] == node_y[1]
```