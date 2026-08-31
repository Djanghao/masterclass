# Python Simple Solution | Derived from Binary Tree Diameter

**Author:** Katie_F
**Votes:** 5
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/712682/](https://leetcode.com/problems/tree-diameter/solutions/712682/)

---

First, start with [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/).

The idea is:
	1. get children depth from bottom up
	2. calculate local diameter
	3. contribute to global diameter result 

```python
class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        self.res = 0
        self.nodeDepth(root)
        return self.res
        
        
    def nodeDepth(self, root) -> int:
        """Return depth of current node. Here we define leaf nodes have depth 1."""
        if not root:
            return 0
        # 1. get child depth from children
        left = self.nodeDepth(root.left)
        right = self.nodeDepth(root.right)

		# 2. get local diameter
        local_diameter = left + right
		
		# 3. contribute to global diameter result
        self.res = max(self.res, local_diameter)
        return max(left, right) + 1        
```

Then for [1245. Tree Diameter](https://leetcode.com/problems/tree-diameter/), we apply the same logic to current problem with an extra step - step 0.
	0. construct tree representation to adjancency list -> for better dfs time complexity 
	1. get children depth from bottom up
	2. calculate local diameter
	3. contribute to global diameter result 

```python
class Solution:
    def treeDiameter(self, edges: List[List[int]]) -> int:
		# 0. construct tree representation
        self.dic = {}
        for i, j in edges:
            self.dic.setdefault(i, []).append(j)
            self.dic.setdefault(j, []).append(i)
        
        #dfs
        root = edges[0][0] 
        self.max_diameter = 0
        self.depthHelper(root, None)
        return self.max_diameter
    
	
    def depthHelper(self, root, parent) -> int:
        """Return depth of cur node. Leaf node depth = 1."""        
        children = self.dic.get(root)
        min_heap = []
    
		# 1. dfs, get depth from children --> use a min heap to keep track of top 2 subtree depth
        for node in children:
            if node == parent:
                continue
            depth = self.depthHelper(node, root)
            if not min_heap or len(min_heap) < 2:
                heapq.heappush(min_heap, depth)                        
            elif depth > min_heap[0]:
                heapq.heapreplace(min_heap, depth)

		# 2. calculate local diameter
		local_dia, max_depth = 0, 0
        if min_heap and len(min_heap) > 0:
            local_dia += min_heap[0]
            max_depth = min_heap[0]
        if min_heap and len(min_heap) > 1:
            local_dia += min_heap[1]
            max_depth = min_heap[1]                
        
		# 3. contribute to global result
        self.max_diameter = max(self.max_diameter, local_dia)
        
        return max_depth + 1
```
