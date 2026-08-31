# Python 3 -> 97.55% faster. Explanation added

**Author:** mybuddy29
**Votes:** 61
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/887303/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/887303/)

---

**Suggestions to make it better are always welcomed.**

Key Learnings for me:
1. First find the node that we need to delete.
2. After it's found, think about ways to keep the tree BST after deleting the node. 
	1. If there's no left or right subtree, we found the leaf. Delete this node without any further traversing.
	2. If it's not a leaf node, what node we can use from the subtree that can replace the delete node and still maintain the BST property? We can either replace the delete node with the minimum from the right subtree (if right exists) or we can replace the delete node with the maximum from the left subtree (if left exists).

```
def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
	if not root:
		return None

	if key > root.val:
		root.right = self.deleteNode(root.right, key)
	elif key < root.val:
		root.left = self.deleteNode(root.left, key)
	else:
		if not root.left and not root.right:
			root = None
		elif root.right:
			root.val = self.successor(root)
			root.right = self.deleteNode(root.right, root.val)
		else:
			root.val = self.predecessor(root)
			root.left = self.deleteNode(root.left, root.val)
	return root

def successor(self, root: TreeNode) -> TreeNode:
	root = root.right
	while root.left:
		root = root.left
	return root.val

def predecessor(self, root: TreeNode) -> TreeNode:
	root = root.left
	while root.right:
		root = root.right
	return root.val
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**