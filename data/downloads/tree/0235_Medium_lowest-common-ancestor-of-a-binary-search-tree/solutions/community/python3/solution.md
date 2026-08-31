# Explained Easy Iterative Python Solution

**Author:** sevdariklejdi
**Votes:** 129
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/1394823/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/1394823/)

---

We will rely upon the invariant of the BST to solve the exercise. We know that the left subtree of each node contains nodes with smaller values and the right subtree contains nodes with greater values. We also know that if two nodes, x and y, are on different subtrees of a node z (one in the left portion and one in the right portion), then x and y have z as the lowest common ancestor. Having these facts in mind, a possible solution looks like the following:

```
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        
        while True:
            if root.val > p.val and root.val > q.val:
                root = root.left
            elif root.val < p.val and root.val < q.val:
                root = root.right
            else:
                return root
```

Note: Since we are guaranteed that p and q exist in the tree, we do not need to check for edges cases.

Consider upvoting, if you found this post useful. :)