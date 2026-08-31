# Python short recursion with explanation

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/height-of-special-binary-tree/solutions/4007575/](https://leetcode.com/problems/height-of-special-binary-tree/solutions/4007575/)

---

# Intuition
I would say that a problem is definded very badly (how is this a tree if this is clearly a graph).

The main issue to understand is that you need to find the leafs of this 'tree'. Normaly in leaf you just check that it does not have left/right values, but here you need something else. Try to look at the images and guess what will show you that this is a leaf.

In short `node.left.right` should point to the same node as just `node` (or the same is for `node.right.left`). But because the values are unique you can just do `node.left.right.val == node.val`.

You need to safe-guard it with checking that each of them is not none so you add `root and root.left and root.left.right and ...`

So you have your standard height of the tree with this condition for a leaf node.


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```
class Solution:
  def heightOfTree(self, root: Optional[TreeNode]) -> int:
    if not root or (root and root.left and root.left.right and root.left.right.val == root.val):
      return 0
    
    return 1 + max(self.heightOfTree(root.left), self.heightOfTree(root.right))        
```