# Simple BFS solution

**Author:** amoghmk
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/3348974/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/3348974/)

---

# Code
```
class Solution:
    def findNearestRightNode(self, root: TreeNode, u: TreeNode) -> Optional[TreeNode]:
        queue = [root]
        found = False
        while queue:
            new_queue = []
            for node in queue:
                if node == u:
                    found = True
                elif found:
                    return node
                else:
                    if node.left:
                        new_queue.append(node.left)
                    if node.right:
                        new_queue.append(node.right)
            if found:
                return None
            queue = new_queue


```