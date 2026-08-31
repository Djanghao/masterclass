# Python: easy and modular

**Author:** sumeetsarkar
**Votes:** 20
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/776393/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/776393/)

---

```
class Solution:
    def boundaryOfBinaryTree(self, root: TreeNode) -> List[int]:
        if not root:
            return []

        def is_leaf(node: TreeNode):
            if not node:
                return False
            if not node.left and not node.right:
                return True

        def add_left_boundary(node: TreeNode, res: List[int]):
            while node:
                if not is_leaf(node):
                    res.append(node.val)
                if node.left:
                    node = node.left
                else:
                    node = node.right

        def add_leaves(node: TreeNode, res: List[int]):
            if node:
                if is_leaf(node):
                    res.append(node.val)
                else:
                    add_leaves(node.left, res)
                    add_leaves(node.right, res)

        def add_right_boundary(node: TreeNode, res: List[int]):
            stack = []
            while node:
                if not is_leaf(node):
                    stack.append(node.val)
                if node.right:
                    node = node.right
                else:
                    node = node.left
            res += stack[::-1]

        boundary = []

		"""
		Essentially 4 operations
		1. Check root
		2. Add left boundary
		3. Add leaves
		4. Add right bounday (reverse!)
		"""
        if not is_leaf(root):
            boundary.append(root.val)

        add_left_boundary(root.left, boundary)
        add_leaves(root, boundary)
        add_right_boundary(root.right, boundary)

        return boundary
```