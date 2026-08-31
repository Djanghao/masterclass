# Java. DFS. It's all about pointer manipulation.

**Author:** o_inari
**Votes:** 32
**Link:** [https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/954468/](https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/954468/)

---

Think of the `parent` pointer as the `next` pointer in a Linked List. Follow the `parent` pointer, climb up the list starting from the leaf node, and swap old parent with new parent.

For every node:
- Save the old parent as a variable for later use
- Point the parent pointer to the new parent (initially set to null)
- Before we reset the right child and left child, clean the left and right children if they point to the new parent 

```
Node original_root;
    
public Node flipBinaryTree(Node root, Node leaf) {
	original_root = root;
	return helper(leaf, null); // the new parent of the leaf node must be null
}

public Node helper(Node node, Node new_parent) {
	Node old_parent = node.parent;
	node.parent = new_parent;

	if (node.left == new_parent) node.left = null;
	if (node.right == new_parent) node.right = null;

	if (node == original_root) return node;

	if (node.left != null) node.right = node.left;
	node.left = helper(old_parent, node);

	return node;
}