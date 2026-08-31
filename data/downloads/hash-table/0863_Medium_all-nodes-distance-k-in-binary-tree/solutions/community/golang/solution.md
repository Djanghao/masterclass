# Golang recursion

**Author:** bobintornado
**Votes:** 3
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/607698/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/607698/)

---

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// solution 2 recursion

func collect(root *TreeNode, k int, ans *[]int) {
    if root == nil || k < 0 { return }
    if k == 0 { 
        *ans = append(*ans, root.Val) 
    }
    collect(root.Left, k-1, ans)
    collect(root.Right, k-1, ans)
}

func distance(root, target *TreeNode, ans *[]int, K int) int {
    // -1 means target not in sub tree
    if root == nil { return -1 }
    
    if root == target {
        collect(target, K, ans)
        return 0
    }
    
    l := distance(root.Left, target, ans, K)
    r := distance(root.Right, target, ans, K)
    
    // target in left tree
    if l >= 0 {
        // root is ans
        if K == l + 1 {
            *ans = append(*ans, root.Val)
        } else {
            collect(root.Right, K - l - 2, ans)
        }
        return l + 1
    }
    
    if r >= 0 {
        // root is ans
        if K == r + 1 {
            *ans = append(*ans, root.Val)
        } else {
            collect(root.Left, K - r - 2, ans)
        }
        return r + 1
    }
    
    return -1
}


func distanceK(root *TreeNode, target *TreeNode, K int) []int {
    ans := []int{}
    
    distance(root, target, &ans, K)
    
    return ans
}
```