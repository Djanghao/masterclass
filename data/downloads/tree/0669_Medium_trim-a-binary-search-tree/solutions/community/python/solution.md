# Python. faster than 98.05%. recursive. 6 lines. DFS.

**Author:** m-d-f
**Votes:** 32
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1046286/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1046286/)

---

	class Solution:
		def trimBST(self, root: TreeNode, low: int, high: int) -> TreeNode:
			if not root: return root
			if root.val < low: return self.trimBST(root.right, low, high)
			if root.val > high: return self.trimBST(root.left, low, high)
			root.left = self.trimBST(root.left, low, high)
			root.right = self.trimBST(root.right, low, high)
			return root