# 5-9 Lines Python, 48+ ms

**Author:** StefanPochmann
**Votes:** 311
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/56064/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/56064/)

---

Solution 1: **Recursive, combine right and left:** 5 lines, 56 ms

Compute the right view of both right and left left subtree, then combine them. For very unbalanced trees, this can be O(n^2), though.

    def rightSideView(self, root):
        if not root:
            return []
        right = self.rightSideView(root.right)
        left = self.rightSideView(root.left)
        return [root.val] + right + left[len(right):]

---

Solution 2: **Recursive, first come first serve:** 9 lines, 48 ms

DFS-traverse the tree right-to-left, add values to the view whenever we first reach a new record depth. This is O(n).

    def rightSideView(self, root):
        def collect(node, depth):
            if node:
                if depth == len(view):
                    view.append(node.val)
                collect(node.right, depth+1)
                collect(node.left, depth+1)
        view = []
        collect(root, 0)
        return view

---

Solution 3: **Iterative, level-by-level:** 7 lines, 48 ms

Traverse the tree level by level and add the last value of each level to the view. This is O(n).

    def rightSideView(self, root):
        view = []
        if root:
            level = [root]
            while level:
                view += level[-1].val,
                level = [kid for node in level for kid in (node.left, node.right) if kid]
        return view