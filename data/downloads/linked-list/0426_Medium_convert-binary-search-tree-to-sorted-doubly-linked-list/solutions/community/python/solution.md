# Python easy inorder traversal

**Author:** bindloss
**Votes:** 69
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/415648/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/415648/)

---

Just use inorder traversal, which finds the nodes in ascending order, and store the head and previous node in global variables. After the traversal is finished, prev is the "tail" of the double linked list so just connect it to the head.
```
class Solution(object):
    head = None
    prev = None

    def treeToDoublyList(self, root):
        if not root: return None
        self.treeToDoublyListHelper(root)
        self.prev.right = self.head
        self.head.left = self.prev
        return self.head

    def treeToDoublyListHelper(self, node):
        if not node: return
        self.treeToDoublyListHelper(node.left)
        if self.prev:
            node.left = self.prev
            self.prev.right = node
        else:  # We are at the head.
            self.head = node
        self.prev = node
        self.treeToDoublyListHelper(node.right)
```