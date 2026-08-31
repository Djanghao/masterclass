# Python/Go O(n) by definition [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 3
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132752/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132752/)

---

Python O(n) by definition, and check in DFS with preorder

---

**Implementation** by definition in Python

```
class Solution:
    def flipMatchVoyage(self, root, voyage):
        
        # ------------------------------
        
        def dfs(root):
            
            if not root:
                # base case aka stop condition
				# empty node or empty tree
                return True
            
            
            ## general cases
            if root.val != voyage[dfs.idx]:
                
                # current node mismatch, no chance to make correction by flip
                return False
            
            # voyage index moves forward
            dfs.idx += 1
            
            if root.left and (root.left.val != voyage[dfs.idx]):
                
                # left child mismatch, flip with right child if right child exists
                root.right and result.append( root.val )
                
                # check subtree in preorder DFS with child node flip
                return dfs(root.right) and dfs(root.left)
                
            else:
                
                # left child match, check subtree in preorder DFS
                return dfs(root.left) and dfs(root.right)
                
      
        # --------------------------
        
        # flip sequence
        result = []
        
        # voyage index during dfs
        dfs.idx = 0
        
        # start checking from root node
        good = dfs(root)
        
        return result if good else [-1]
```

---

**Implementation** by definition in Golang

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func flipMatchVoyage(root *TreeNode, voyage []int) []int {
    
    var dfs func(root *TreeNode)bool
    result := make([]int, 0)
    idx := 0
    
    dfs = func(root *TreeNode)bool{
        
        if root == nil{
            // base case aka stop condtion
            // empty node or empty tree
            return true
        }
        
        // general cases
        if root.Val != voyage[idx]{
            // current node mismatch, no chance to make correction by flip
            return false
        }
        
        // voyage index moves forward
        idx += 1
        
        if root.Left != nil && root.Left.Val != voyage[idx]{
            
            if root.Right != nil{
                result = append(result, root.Val)
            }
            
            // check subtree in preorder DFS with child node flip
            return dfs(root.Right) && dfs(root.Left)
            
        }else{
            
            // left child match, check subtree in preorder DFS
            return dfs(root.Left) && dfs(root.Right)
        }
        
    }
    
    good := dfs(root)
    
    if good{
        return result
    }else{
        return []int{-1}
    }

}

```

---

Related leetcode challenge:

[Leetcode #144 Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

[Leetcode #99 Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)