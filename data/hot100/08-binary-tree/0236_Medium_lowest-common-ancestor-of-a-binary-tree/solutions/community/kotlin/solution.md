# Kotlin || DFS || Easy recursive approach

**Author:** mahrezz
**Votes:** 8
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/2336498/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/2336498/)

---

```

/*
    if leftSubtree and rightSubtree includes the nodes searched then it means we can easily
    return the root of those the left and right subtrees, 
    
    In case of one of them is null, then the right one (itself) will be our lowest common ancestor

*/
class Solution {
    fun lowestCommonAncestor(root: TreeNode?, p: TreeNode?, q: TreeNode?): TreeNode? {
        
        if(root == null || p == root || q == root) return root
        
        val left = lowestCommonAncestor(root?.left, p,q)
        val right = lowestCommonAncestor(root?.right, p,q)
        
        if(left != null && right != null) {
            return root;
        }
        
        return if(left == null) right else left
    }
}
```