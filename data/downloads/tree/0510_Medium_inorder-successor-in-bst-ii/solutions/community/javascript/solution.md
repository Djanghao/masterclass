# JavaScript Solution, iterative, Time O(h) with explanation

**Author:** dball1126
**Votes:** 2
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/1345210/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/1345210/)

---

It's important to note that this binary search tree has references to it's parent, and the node they give us can be anywhere in the tree.

We have to handle two cases. This one needs to go first.
1. If we have a right child. The successor must come from that branch of the tree. To find the successor of the node...which is the smallest value that is greater than the the first node's value we were originally given....we go right once and then go all the way left(if we can go left). If we find the successor, return the answer immediately.

2. If we got here and the node has a parent. The successor must come from One of the parents. In order to find that we go all the way up the tree until the parent's value is greater than the first node's value we were originally given.

Since the successor only comes from one side of the tree time is O(h) where h is the height of the tree.

Success
Details 
Runtime: 80 ms, faster than 98.57% of JavaScript online submissions for Inorder Successor in BST II.
Memory Usage: 44.1 MB, less than 24.29% of JavaScript online submissions for Inorder Successor in BST II.

```
 var inorderSuccessor = function(node) {
    if (!node) return node;
    const value = node.val;
	// first case
    if (node.right) {
        node = node.right
        while (node.left) node = node.left
        return node;
    }
	// second case
    while (node.parent) {
        node = node.parent;
        if (node.val > value) return node;
    }

    return null;
};
```