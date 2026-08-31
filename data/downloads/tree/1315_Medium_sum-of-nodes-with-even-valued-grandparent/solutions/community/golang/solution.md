# [Go/Python] Simple And Efficient Solution (DFS) || Beats 100%

**Author:** vltvdnl
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4560338/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4560338/)

---


# Approach
First we need to determine how we are going to recognise the value of grandparent. We will pass the **parent** value and the **grandparent** value together with root. This is followed by a normal **DFS** with the condition that the **grandparent value is even**. Also, to simplify the algorithm, **we will not return value**, but will change the values of the **external variable sum**. 

But since root initially has neither parent nor grandparent values, we will run DFS **twice**: first from root.Left, where parent value = root.Val, and grandparent value = 1 (the smallest odd number), similar to root.Right. 



# Code
```Go []
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sumEvenGrandparent(root *TreeNode) int {
    sum :=0
    var dfs func(root *TreeNode, pV int, gpV int) int
    dfs  = func(root *TreeNode, pV int, gpV int) int{
        if root == nil{
            return 0
        }
        if gpV%2==0{
            sum+=root.Val
        }
        dfs(root.Left, root.Val, pV)
        dfs(root.Right, root.Val, pV)
        return sum
    }
    dfs(root.Left, root.Val, 1)
    dfs(root.Right, root.Val, 1)
    return sum
}
```
```python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        sum =0
        def dfs(root, pV, gpV):
            nonlocal sum
            if root == None:
                return
            if gpV%2==0:
                sum+=root.val
            dfs(root.left, root.val, pV)
            dfs(root.right, root.val, pV)
        dfs(root.left, root.val, 1)
        dfs(root.right, root.val, 1)
        return sum
```
## If you hava any question, feel free to ask. If you like the solution or the explaination, Please UPVOTE!