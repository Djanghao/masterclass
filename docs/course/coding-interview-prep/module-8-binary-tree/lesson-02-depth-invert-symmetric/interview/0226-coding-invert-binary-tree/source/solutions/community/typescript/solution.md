# TypeScript 5 lines

**Author:** realdennis
**Votes:** 11
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/1528433/](https://leetcode.com/problems/invert-binary-tree/solutions/1528433/)

---

```
function invertTree(root: TreeNode | null): TreeNode | null {
	if (root === null) return null;
	[root.left, root.right] = [root.right, root.left];
	invertTree(root.left);
	invertTree(root.right);
	return root;
}
```