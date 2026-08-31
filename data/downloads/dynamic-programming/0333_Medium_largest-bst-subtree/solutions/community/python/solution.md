# Short Python solution

**Author:** StefanPochmann
**Votes:** 121
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/78895/](https://leetcode.com/problems/largest-bst-subtree/solutions/78895/)

---

    def largestBSTSubtree(self, root):
        def dfs(root):
            if not root:
                return 0, 0, float('inf'), float('-inf')
            N1, n1, min1, max1 = dfs(root.left)
            N2, n2, min2, max2 = dfs(root.right)
            n = n1 + 1 + n2 if max1 < root.val < min2 else float('-inf')
            return max(N1, N2, n), n, min(min1, root.val), max(max2, root.val)
        return dfs(root)[0]

My `dfs` returns four values:

- `N` is the size of the largest BST in the tree.
- If the tree is a BST, then `n` is the number of nodes, otherwise it's -infinity.
- If the tree is a BST, then `min` and `max` are the minimum/maximum value in the tree.