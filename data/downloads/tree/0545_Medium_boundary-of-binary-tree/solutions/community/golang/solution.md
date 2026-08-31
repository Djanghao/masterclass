# Beats 100% go

**Author:** kotyara85
**Votes:** 0
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/4852705/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/4852705/)

---

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

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

type Direction string
var Left Direction = "left"
var Right Direction = "right"
var Edges Direction = "edges"

func boundaryOfBinaryTree(root *TreeNode) []int {
    if root == nil {
        return []int{}
    }
    res := []int{root.Val}
    cache := make(map[*TreeNode]struct{})
    cache[root] = struct{}{}
    res = append(res, traverse(root.Left, Left, cache)...)
    res = append(res, traverse(root, Edges, cache)...)
    res = append(res, traverse(root.Right, Right, cache)...)
    return res
}

func traverse(node *TreeNode, direction Direction, cache map[*TreeNode]struct{}) []int {
    if node == nil {
        return []int{}
    }

    var res []int

    if direction == Left {
        if (node.Left != nil || node.Right != nil) {
            if _, ok := cache[node]; !ok {
                res = append([]int{node.Val},res...)
                cache[node] = struct{}{}
            }
        }
        if node.Left != nil {
            res = append(res, traverse(node.Left, direction, cache)...)
        } else {
            res = append(res, traverse(node.Right, direction, cache)...)
        }
    } else if direction == Right {
        if (node.Left != nil || node.Right != nil) {
            if _, ok := cache[node]; !ok {
                res = append([]int{node.Val},res...)
                cache[node] = struct{}{}
            }
        }
        if node.Right!= nil {
            res= append(traverse(node.Right, direction, cache), res...)
        } else {
            res = append(traverse(node.Left, direction, cache),res...)
        }
    } else if direction == Edges {
        if node.Left == nil && node.Right == nil {
            if _, ok := cache[node]; !ok {
                res = append([]int{node.Val},res...)
                cache[node] = struct{}{}
            }
        }
        res=append(res, traverse(node.Left, direction, cache)...)
        res=append(res, traverse(node.Right, direction, cache)...)
    }
    return res
}
```