# Go simple recursion

**Author:** fseekdpk
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/3313384/](https://leetcode.com/problems/two-sum-bsts/solutions/3313384/)

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
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func twoSumBSTs(root1 *TreeNode, root2 *TreeNode, target int) bool {

    if root1 == nil || root2 == nil { return false }


    if root1.Val + root2.Val == target {
        return true 
    }

    if root1.Val + root2.Val < target {
        return twoSumBSTs(root1.Right, root2, target) ||twoSumBSTs(root1, root2.Right, target)
    }

    if root1.Val + root2.Val > target {
       return twoSumBSTs(root1.Left, root2, target) || twoSumBSTs(root1, root2.Left, target) 
    }
    
    return false 

}

```