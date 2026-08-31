# Python 3   ||   3-4 lines, two versions  w/ explanation  ||   T/S: 94% / 99%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/2842992/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/2842992/)

---

Here's the plan:

- We traverse to the right from the root as long as there is a node to the right and its value is greater than `val`.

- Once we find that node, we put the new node to the right and point to the pruned subtree (if any) with the new node's left pointer.

Below are two versions, one iterative, the other recursive. 
________

#### Iterative version
```
class Solution:                                  
    def insertIntoMaxTree(self, root: TreeNode, val: int) -> TreeNode:

        rootPar = par = TreeNode(inf, None,root)

        while par.right and par.right.val > val: par = par.right

        par.right = TreeNode(val, par.right,None)

        return rootPar.right
```
[https://leetcode.com/problems/maximum-binary-tree-ii/submissions/848737984/](https://leetcode.com/problems/maximum-binary-tree-ii/submissions/848737984/)

_____
#### Recursive version
```
class Solution:                                  # The recursive version:
    def insertIntoMaxTree(self, root: TreeNode, val: int) -> TreeNode:
        
        if not root or val > root.val: return TreeNode(val, root, None)

        root.right = self.insertIntoMaxTree(root.right, val)

        return root
```
[https://leetcode.com/problems/maximum-binary-tree-ii/submissions/1273618943/](https://leetcode.com/problems/maximum-binary-tree-ii/submissions/1273618943/)

I could be wrong, but I think that, for both, time complexity is *O*(*N*) and space complexity is *O*(*H*), in which *N* ~ the number of nodes and *H* ~ the height of the tree.
