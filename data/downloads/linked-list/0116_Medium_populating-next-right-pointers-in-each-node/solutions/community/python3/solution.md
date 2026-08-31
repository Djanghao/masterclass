# [Python3] BFS and DFS

**Author:** zhanweiting
**Votes:** 33
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/379177/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/379177/)

---

* BFS
```
"""
# Definition for a Node.
class Node:
    def __init__(self, val, left, right, next):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
from collections import deque
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        """
      1 (1)
    2 (2)->    3(1)
 4(4) -> 5(3) -> 6(2) -> 7(1)

"""
        if root ==  None:
            return None
        q = deque([root])
        while q:  # [1] [3,4,5]
            size = len(q) # 1 2
            while size > 0: #  > 0
                node = q.popleft() # node =1,2,3
                if size > 1 :# 
                    node.next = q[0] #  2.next = 3
                size -= 1          # size =1
                
                if node.left:         
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        return root
```
* DFS
```
"""
# Definition for a Node.
class Node:
    def __init__(self, val, left, right, next):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
from collections import deque
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        """
      1 (1)
    2 (2)->    3(1)
 4(4) -> 5(3) -> 6(2) -> 7(1)

"""
        self.dfs(root)
        return root
    
    ## (1). left child -> right child
    ## (2). right child -> next.left child
    def dfs(self,root):
        if root == None or root.left == None:
            return
        root.left.next = root.right
        if root.next != None: 
            root.right.next = root.next.left
        self.dfs(root.left)
        self.dfs(root.right)
```