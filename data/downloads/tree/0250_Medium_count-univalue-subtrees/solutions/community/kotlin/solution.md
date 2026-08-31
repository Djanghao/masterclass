# Kotlin solution with explanation

**Author:** SleeplessChallenger
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/1607110/](https://leetcode.com/problems/count-univalue-subtrees/solutions/1607110/)

---

It's a little tricky question as LC example doesn't show the full possibility of the answer. Imagine tree:
```
				3
			  /    \\
			2	     3
		  /  \\        \\
		null null      2
					   / \\
					  2   2
```

Here we do have count 4. +1 for 2 in left node, then +2 for two nodes in the right subtree and + 1 for part under 3 as it's one big Univalue tree

Steps:

1. have count & bool variables as main operators and node will be passed within recursive calls
2. we have `flag = true` at first to inform us about the situation afterwards.
3. if either of the `leftUni || rightUni` is false: `flag` is false
4. if curr node != (node to the left || node to the right): `flag` is false
5. at the bottom return either sum of left && right + 1 to include current tree and true, else just the sum of down-the-tree-nodes and false

Time: O(n) Space: O(n) as we traverse all the trees

```
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun countUnivalSubtrees(root: TreeNode?): Int {
        val (result, _) = this.traverseTree(root)
        return result
    }
    
    fun traverseTree(node: TreeNode?): Pair<Int, Boolean> {
        if(node == null) return Pair(0, true)
        
        val (leftCount, leftUni) = this.traverseTree(node.left)
        val (rightCount, rightUni) = this.traverseTree(node.right)
        var flag: Boolean = true
        
        if(leftUni != true || rightUni != true) flag = false
        
        if(node.left != null && node.left.`val` != node.`val`) flag = false
        
        if(node.right != null && node.right.`val` != node.`val`) flag = false
        
        if(flag == true) {
            return Pair((leftCount + rightCount + 1), true)
        } else return Pair((leftCount + rightCount), false)
        
    }
}
```