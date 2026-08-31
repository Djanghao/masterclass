# Scala | Pattern Matching | Functional style

**Author:** Andrea_Detommaso
**Votes:** 4
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/3013604/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/3013604/)

---


# Approach

### **Root match**

- If the current root node is null, return null.
- If the current root node is either P or Q, return Root. 
- Otherwise, recurse on the left child node *L* and right child node *R*. Let's define the subtree with *L* as its root as the *left tree* and the subtree with *R* as its root as the *right tree*.
   **a.** If the result of the recursion on the *left tree* is null, it means that the subtree with *L* as its root does not contain either P or Q, so the result of the recursion on *R* must return the oldest ancestor of both P and Q.
    **b.** If the result of the recursion on the *right tree* is null, it means that the subtree with R as its root does not contain either P or Q, so the result of the recursion on *L* must return the oldest ancestor of both P and Q.
    **c.** If the result of the recursion on both *L* and *R* are not null, it means that the current root node is the oldest ancestor because both the left and right subtrees contain either P or Q.


# Code
```

object Solution {
    def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode = 

        root match {
            case null => null
            case _ if root.value == p.value || root.value == q.value => root
            case _ => (lowestCommonAncestor(root.left,p,q), lowestCommonAncestor(root.right,p,q)) match {
                       case (null, rightTree) => rightTree 
                       case (leftTree, null) => leftTree
                       case _ => root
                    }
        }
}


```