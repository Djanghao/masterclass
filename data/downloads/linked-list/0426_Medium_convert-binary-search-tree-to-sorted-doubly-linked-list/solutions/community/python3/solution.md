# Easy + Clean Python Recursion In Place beats 96%

**Author:** Pythagoras_the_3rd
**Votes:** 6
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/1270260/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/1270260/)

---

```
class Solution:
    def treeToDoublyList(self, root: 'Node') -> 'Node':
        
        if not root:
            return root
        # track a cur / head and sentinal nodes / pointer.
        head = dummy = Node()
        # in order traversal to build DLL (we have a BST).
        def helper(node):
            nonlocal head
            if not node:
                return
            helper(node.left)
            # head(now prev node).right = cur node (successor). 
            head.right = node
            # cur node .left = prev node (predecessor).
            node.left = head
            # prev node now = cur node, move on.
            head = node
            helper(node.right)
            
        helper(root)
        # dummy.right is first node, left of dummy right should point to end (head will be last node).
        # head.right should point to the first node, which is dummy.right.
        dummy.right.left, head.right = head, dummy.right
        return dummy.right
```