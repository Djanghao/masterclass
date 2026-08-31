# Python solutions (dfs recursively, dfs+stack, bfs+queue).

**Author:** OldCodingFarmer
**Votes:** 167
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/34978/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/34978/)

---


    # dfs recursively
    def levelOrderBottom1(self, root):
        res = []
        self.dfs(root, 0, res)
        return res
    
    def dfs(self, root, level, res):
        if root:
            if len(res) < level + 1:
                res.insert(0, [])
            res[-(level+1)].append(root.val)
            self.dfs(root.left, level+1, res)
            self.dfs(root.right, level+1, res)
            
    # dfs + stack
    def levelOrderBottom2(self, root):
        stack = [(root, 0)]
        res = []
        while stack:
            node, level = stack.pop()
            if node:
                if len(res) < level+1:
                    res.insert(0, [])
                res[-(level+1)].append(node.val)
                stack.append((node.right, level+1))
                stack.append((node.left, level+1))
        return res
     
    # bfs + queue   
    def levelOrderBottom(self, root):
        queue, res = collections.deque([(root, 0)]), []
        while queue:
            node, level = queue.popleft()
            if node:
                if len(res) < level+1:
                    res.insert(0, [])
                res[-(level+1)].append(node.val)
                queue.append((node.left, level+1))
                queue.append((node.right, level+1))
        return res
		
	def levelOrderBottom(self, root):
        deque, ret = collections.deque(), []
        if root:
            deque.append(root)
        while deque:
            level, size = [], len(deque)
            for _ in range(size):
                node = deque.popleft()
                level.append(node.val)
                if node.left:
                    deque.append(node.left)
                if node.right:
                    deque.append(node.right)
            ret.append(level)
        return ret[::-1]