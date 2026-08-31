# TypeScript solution using recursion.

**Author:** 0xFFrancesco
**Votes:** 8
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/3496777/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/3496777/)

---

# Code
```
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	if (!inorder.length) return null;

	const root = preorder.shift()!;
	const inOrderRootIndex = inorder.findIndex((val) => val === root);
	const inOrderLeftBranch = inorder.slice(0, inOrderRootIndex);
	const inOrderRightBranch = inorder.slice(inOrderRootIndex + 1);

	const tree = new TreeNode(root);
	tree.left = buildTree(preorder, inOrderLeftBranch);
	tree.right = buildTree(preorder, inOrderRightBranch);

	return tree;
}
```