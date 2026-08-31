# javascript/typescript recursive solution

**Author:** arpes28
**Votes:** 7
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/4385259/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/4385259/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


//  Finding the leftmost node 
function findSmallest(node) {
    while (node.left) {
        node = node.left
    }
    return node
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {

    //  Return null if the root is empty
    if (!root) return null

    //  if the key is smaller than the current node then call deleteNode() recursively with root.left which will return a node that will be the left of the current node
    if (root.val > key) root.left = deleteNode(root.left, key)

    //  if the key is greater than the current node then call deleteNode() recursively with root.right which will return a node that will be the right of the current node
    if (root.val < key) root.right = deleteNode(root.right, key)

    //  if the key is equal to the current node then we have found the target node to be deleted
    if (root.val === key) {

        //  If the target node is a leaf node, meaning there's no left or right child then return null which will delete the node as it'll be return null
        if (!root.left && !root.right) return null

        //  If only one of the child node exist then return that child node
        if (!root.left) return root.right
        else if (!root.right) return root.left

        //  Otherwise we will find the minNode to the right child and append the current node's left to the left of the minNode
        else {
            const minNode = findSmallest(root.right)
            minNode.left = root.left
            return root.right
        }
    }


    return root
};
```