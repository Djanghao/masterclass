# simple and easy Python solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 11
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748888/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748888/)

---



###### Let's Connect on LinkedIn: www.linkedin.com/in/shishirrsiam
###### Let's Connect on Facebook: www.fb.com/shishirrsiam

# Code
```python []
class Solution(object):
    # This function checks whether there is a path in the binary tree that matches the current linked list path.
    def checkPath(self, head, root):
        # If we've reached the end of the linked list, it means the path matches, so return True.
        if not head:
            return True
        
        # If we've reached a leaf node in the binary tree (root is None), or if the current values of the linked list
        # and the binary tree node don't match, return False.
        if not root or head.val != root.val:
            return False
        
        # Recursively check the left and right child of the binary tree to see if the next node in the linked list
        # can be found in either subtree.
        return self.checkPath(head.next, root.left) or self.checkPath(head.next, root.right)

    def isSubPath(self, head, root):
        # If the binary tree is empty, return False because there can't be a subpath.
        if not root:
            return False

        # Check if the current binary tree node matches the linked list's head and, if so, check the path from there.
        # Also, recursively check the left and right subtrees to see if the linked list is a subpath starting
        # from those nodes.
        return (head.val == root.val and self.checkPath(head, root)) or self.isSubPath(head, root.left) or self.isSubPath(head, root.right)      
```
# if it's help, please up \u2B06 vote! \u2764\uFE0F