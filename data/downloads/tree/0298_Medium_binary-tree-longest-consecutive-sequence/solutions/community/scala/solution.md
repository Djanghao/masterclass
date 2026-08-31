# Using Recursion

**Author:** user2807A
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/5076954/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/5076954/)

---

# Intuition
1. keep computing the longest sequence until you reach the End of Node
2. return the Max Longest Sequence Length

# Approach
This method longestConsecutive calculates the length of the longest consecutive sequence in a binary tree. The method recursion is a helper function that traverses the tree recursively while keeping track of the current consecutive count (cnt) and the maximum consecutive count (maxCnt).

It checks if the value of the current node (root.value) is consecutive to the parent node's value (pVal). If it is, it increments the consecutive count (cnt), otherwise it resets it to 1. It updates the maximum consecutive count (nMaxCnt) accordingly.

If the current node is a leaf node (has no left or right child), it returns the maximum consecutive count (nMaxCnt). Otherwise, it recursively calls itself for the left and right children, passing the updated counts. Finally, it returns the maximum value between the maximum consecutive counts of the left and right subtrees.

# Complexity
- Time complexity: nlogn

- Space complexity: n

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
    def longestConsecutive(root: TreeNode): Int = {
        recursion(root, root.value, 0, 0)
    }

    def recursion(root: TreeNode, pVal: Int, cnt: Int, maxCnt: Int): Int = {
        val nCnt = if (pVal+1 == root.value) {
            cnt + 1
        } else {
            1   
        }
        val nMaxCnt = if (nCnt > maxCnt) {
            nCnt
        } else {
            maxCnt
        }
        if (root.left == null && root.right == null) {
            nMaxCnt
        } 
        else {
            val lMax = if (root.left != null){
                recursion(root.left, root.value, nCnt, nMaxCnt)
            } else {
                nMaxCnt
            }
            val rMax = if (root.right != null){
                recursion(root.right, root.value, nCnt, nMaxCnt)
            } else {
                nMaxCnt
            }
            if (lMax > rMax) lMax else rMax
        }
    }
}
```