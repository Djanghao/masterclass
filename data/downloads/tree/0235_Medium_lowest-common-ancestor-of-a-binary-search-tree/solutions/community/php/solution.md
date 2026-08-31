# 🚨 [JavaScript][PHP]  Recursive & Iterative Approaches

**Author:** akunopaka
**Votes:** 4
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/3384014/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/3384014/)

---


The Lowest Common Ancestor (LCA) of a Binary Search Tree (BST) is the deepest node in the tree which has both the given nodes as its descendants. Finding the LCA of a BST is a challenging task as the tree needs to be traversed in order to identify the LCA.

There are two approaches that can be used to solve the problem: the Recursive Approach and the Iterative Approach. 
**The Recursive Approach** involves breaking down the problem into subproblems and solving them one by one until the LCA is found. 
**The Iterative Approach** utilizes a loop structure to traverse the tree and identify the LCA. 

Both approaches have their own pros and cons and are usually used depending on the requirement and the user's preference.



### Recursive Approach

This approach uses recursion to traverse the binary tree. The logic is that if the root node is greater than both the p and q nodes, then both p and q are in the left subtree and the function recursively calls itself on the left subtree. If the root node is less than both the p and q nodes, then both p and q are in the right subtree and the function recursively calls itself on the right subtree. If neither of these conditions is true, then the root node is the Lowest Common Ancestor.

*Time Complexity:* $$O(log N)$$, where n is the total number of nodes in the tree.
*Space Complexity:* $$O(log N)$$ This approach has a space complexity of O(log N) as it requires the recursive stack to store the nodes of the binary tree when the function is called.

```javascript []
var lowestCommonAncestor = function (root, p, q) {
    // both p and q are in the left subtree
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // both p and q are in the right subtree
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};
```
```php []
class Solution
{
    /**
     * @param TreeNode $root
     * @param TreeNode $p
     * @param TreeNode $q
     * @return TreeNode
     */
    function lowestCommonAncestor($root, $p, $q) {
        if ($root->val > $p->val && $root->val > $q->val) return $this->lowestCommonAncestor($root->left, $p, $q);
        if ($root->val < $p->val && $root->val < $q->val) return $this->lowestCommonAncestor($root->right, $p, $q);
        return $root;
    }
}
```


### Iterative Approach
This approach uses an iterative method to find the Lowest Common Ancestor (LCA) of two nodes in a Binary Tree. We start by initializing a variable (root) to the root of the Binary Tree and comparing its value to the values of the two nodes. If the root's value is greater than the values of both nodes, we move the root to the left child of the root. If the root's value is less than the values of both nodes, we move the root to the right child of the root. If neither condition is satisfied, the root is the LCA and is returned. If none of the nodes are found, null is returned. 

*Time complexity*: $$O(log N)$$ The time complexity of this algorithm is O(log n) because it is using a Binary Search Tree (BST). BSTs have a time complexity of log(n) for searching, so this algorithm has a time complexity of O(logn).
*Space complexity*: $$O(1)$$ The space complexity is constant since no additional space is required to solve the problem.

```javascript []
var lowestCommonAncestor = function (root, p, q) {
    while (root !== null) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else {
            return root;
        }
    }
    return null
};
```
```php []
class Solution
{
    /**
     * @param TreeNode $root
     * @param TreeNode $p
     * @param TreeNode $q
     * @return TreeNode
     */
    function lowestCommonAncestor(TreeNode $root, TreeNode $p, TreeNode $q): ?TreeNode {
        while ($root) {
            if ($root->val > $p->val && $root->val > $q->val) {
                $root = $root->left;
            } elseif ($root->val < $p->val && $root->val < $q->val) {
                $root = $root->right;
            } else {
                return $root;
            }
        }
        return null;
    }
}
```
##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDC4D**