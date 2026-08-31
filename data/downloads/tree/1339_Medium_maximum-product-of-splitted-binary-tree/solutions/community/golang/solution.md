# Go O(n)

**Author:** tuanbieber
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2529652/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2529652/)

---

```
func maxProduct(root *TreeNode) int {
    totalSum, result := sum(root), -1<<63
    
    var traverse func(*TreeNode) int 
    traverse = func(root *TreeNode) int {
        if root == nil {
            return 0
        }
        
        leftSum := traverse(root.Left)
        rightSum := traverse(root.Right)

        result = max(result, leftSum * (totalSum - leftSum))
        result = max(result, rightSum * (totalSum - rightSum))
        
        return root.Val + leftSum + rightSum
    }
    
    traverse(root)
    
    return result % 1000000007
}

func sum(root *TreeNode) int {
    if root == nil {
        return 0
    }

    return root.Val + sum(root.Left) + sum(root.Right)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}

```