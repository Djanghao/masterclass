# [JavasScript] Clean, easy to understand, heavily commented solution

**Author:** rcomesan
**Votes:** 22
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/1590815/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/1590815/)

---

```
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    // T: O(log(n)), S: O(1) (not counting stack frames for recursion)
    // being n the amount of nodes in the tree

    // T: O(h), S: O(h) (counting h stack frames for recursion)
    // being h the height of the tree (max elements of the bst = n = 2^h)

    if (null === root) { return null; }

    if (root.val === key) {
        // to delete a leaf node (no children) we can just return null
        if (null === root.left && null === root.right) { return null; }

        // at this point we need to delete the current node. so, we need to return a different one
        // we need to pick either the left or the right node

        if (null !== root.left && null !== root.right) {
            // this a complicated edge case that we can't solve right away
            //
            // we could pick the root.left node, but what if (root.left.right !== null)? where
            // are we going to attach our root.right subtree without overwriting any existing
            // reference?
            //
            // also, we could pick the root.right node, but what if (root.right.left !== null) too?
            //
            // so, these are our two possible (and equivalent) options:
            //      1) pick our root.right node as the root node, and find the minimum node in 
            //         the right subtree that has no left pointer, and assign the root.left node to it.
            //
            //      2) pick our root.left node as the root node, and find the maximum node in
            //         the left subtree that has no right pointer, and assign the root.right node to it.
            // 
			// here's an example of deleting node with val=5 without breaking the BST choosing option (1)
            //
            //                  5                     8
            //               /     \\                 / \\
            //              3*      8               7   9
            //             / \\     / \\    --->     /
            //            2   4   7   9           6
            //                   /               /
            //                  6               3*
            //                                 / \\
            //                                2   4
            //
            // we'll choose option (1) and we'll find the minimum number in the right subtree that 
            // has no left pointer
            // that one is going to be the node that will link to the left subtree of the current
            // -soon to be deleted- node. by doing that we'll preserve the structure of the BST
            // (nodes to the left of a node should be smaller, and numbers to the
            // right should be greater).
            let curr = root.right;
            while (curr.left) { curr = curr.left; }
            curr.left = root.left;
            return root.right;
        }
        
        // if left/right is null, then we can safely pick the one that is not null without 
        // breaking the BST
        if (null === root.left) { return root.right; }
        if (null === root.right) { return root.left; }
    }
    
    if (key < root.val) {
        // look for our target node in the left subtree
        root.left = deleteNode(root.left, key);
    } else {
        // look for our target node in the right subtree
        root.right = deleteNode(root.right, key);
    }

    return root;
};
```