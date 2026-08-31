# Practical and Realistic Solution | Beats 100% | Basic Recursion

**Author:** vltvdnl
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/4470381/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/4470381/)

---


# Approach
- First, we **create the root of the tree** from the first element of the array (because preoreder).
- Next, we create the **Insert function**, which will insert elements into our search tree one by one. 
- The **basic idea of a binary search tree** is that if an element is greater than the node value, we insert it on the right side of the node, otherwise on the left. 
- In this way we traverse the whole tree **recursively**, trying to find a free space for an element. 

*This solution of the problem may not be the most efficient (although it beats 100% of solutions) in terms of the problem conditions (preorder), but it is one of the most **realistic and practical**. If you need to create a binary search tree with a root and an **array of elements in any order**, this code can easily do it. It can be very useful when solving some contests and Olympiads.*


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
func bstFromPreorder(preorder []int) *TreeNode {
    head := &TreeNode{Val: preorder[0], Left: nil, Right: nil}
    for _, key := range preorder{
        insert(head, key)
    }
    return head
}
func insert(node *TreeNode, val int){
    if val < node.Val{
        if node.Left == nil{
            node.Left = &TreeNode{Val: val, Left: nil, Right: nil}
        }else{
            insert(node.Left, val)
        }
    }else if val>node.Val{
        if node.Right == nil{
            node.Right = &TreeNode{Val: val, Left:nil, Right: nil}
        }else{
            insert(node.Right, val)
        }
    }
}
```
## If you hava any question, feel free to ask. If you like the solution or the explaination, Please UPVOTE!