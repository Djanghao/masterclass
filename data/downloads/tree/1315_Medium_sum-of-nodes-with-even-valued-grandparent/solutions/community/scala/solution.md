# Scala DFS

**Author:** Shubhang2101
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4956180/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4956180/)

---

# Intuition
DFS Solution

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)


# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def sumEvenGrandparent(root: TreeNode): Int = {
        

        def dfs(node:TreeNode):(Int,Int,Int)={
            if(node == null){
                (0,0,0)
            }
            else{
                if(node.value %2 == 0){
                    val (leftValue,leftSum,acc1) = dfs(node.left)
                    val (rightValue,rightSum,acc2) = dfs(node.right)

                    (node.value,leftValue+rightValue,acc1+acc2+leftSum+rightSum)
                }
                else{
                    val (leftValue,leftSum,acc1) = dfs(node.left)
                    val (rightValue,rightSum,acc2) = dfs(node.right)

                    (node.value,leftValue+rightValue,acc1+acc2)
                }
            }
        }

        dfs(root)._3
    }
}

```