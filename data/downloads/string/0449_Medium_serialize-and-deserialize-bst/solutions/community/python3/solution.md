# Python, BFS > 90%

**Author:** warmr0bot
**Votes:** 23
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/886326/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/886326/)

---

```
class Codec:

    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        if not root: return ''
        tree = []
        queue = deque([root])
        while queue:
            node = queue.popleft()
            if node:
                tree.append(str(node.val))
                queue.extend([node.left, node.right])
            else:
                tree.append('*')
        return ','.join(tree)
        

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        if not data: return None
        tree = deque(data.split(','))
        root = TreeNode(int(tree.popleft()))
        queue = deque([root])
        while queue:
            node = queue.popleft()
            
            if (left := tree.popleft()) != '*':
                node.left = TreeNode(int(left))
                queue.append(node.left)
            
            if (right := tree.popleft()) != '*':
                node.right = TreeNode(int(right))
                queue.append(node.right)
                
        return root
```