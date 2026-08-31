# Go / GoLang | Recursive / Iterative / Morris

**Author:** aristorinjuang
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1952661/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1952661/)

---

## Recursive
Time: O(n) / 12 ms / 80.60% | Space: O(n) / 6.7 MB / 80.60%
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func helper(root *TreeNode, sum *int) *TreeNode {
    if root != nil {
        helper(root.Right, sum)
        *sum += root.Val
        root.Val = *sum
        helper(root.Left, sum)
    }

    return root
}

func convertBST(root *TreeNode) *TreeNode {
    sum := 0

    return helper(root, &sum)
}
```

## Iterative
Time: O(n) / 28 ms / 17.91% | Space: O(n) / 7.4 MB / 38.81%
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func convertBST(root *TreeNode) *TreeNode {
    sum, node, stack := 0, root, []*TreeNode{}
    
    for len(stack) > 0 || node != nil {
        for node != nil {
            stack = append(stack, node)
            node = node.Right
        }
        
        node = stack[len(stack) - 1]
        stack = stack[:len(stack) - 1]
        sum += node.Val
        node.Val = sum
        node = node.Left
    }
    
    return root
}
```

## Morris
Time: O(n) / 20 ms / 41.79% | Space: O(1) / 7.6 MB / 10.45%
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func getSuccessor(node *TreeNode) *TreeNode {
    succ := node.Right
    
    for succ.Left != nil && succ.Left != node {
        succ = succ.Left
    }
    
    return succ
}

func convertBST(root *TreeNode) *TreeNode {
    sum, node := 0, root
    
    for node != nil {
        if node.Right == nil {
            sum += node.Val
            node.Val = sum
            node = node.Left
        } else {
            succ := getSuccessor(node)
            if succ.Left == nil {
                succ.Left, node = node, node.Right
            } else {
                succ.Left = nil
                sum += node.Val
                node.Val, node = sum, node.Left
            }
        }
    }
    
    return root
}
```