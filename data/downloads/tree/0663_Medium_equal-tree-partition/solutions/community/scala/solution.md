# DFS recursion

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/5193687/](https://leetcode.com/problems/equal-tree-partition/solutions/5193687/)

---

# Intuition
he problem is asking whether a binary tree is a "sum tree", where the sum of all the values in the tree is equal to twice the sum of any subtree. This means that the sum of all the values in the tree is even, and there is a subtree with a sum that is half of the total sum.

# Approach
To solve this problem, we can use a depth-first search (DFS) to traverse the tree and calculate the sum of each subtree. We can use a set to keep track of the sums of all the subtrees we have seen so far. If we find a subtree with a sum that is half of the total sum, we can return true. If we finish traversing the tree and haven't found a matching subtree, we can return false.

# Complexity
- Time complexity:
$$O(n)$$, where $$n$$ is the number of nodes in the tree. This is because we visit each node once.

- Space complexity:
$$O(n)$$, where $$n$$ is the number of nodes in the tree. This is because in the worst case, we need to store all the node values in the set.

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
    def checkEqualTree(root: TreeNode): Boolean = {
        val subTreeSums = scala.collection.mutable.Set[Int]()
        val sum = sumTreeValues(root, true, subTreeSums)
        sum % 2 == 0 && subTreeSums.contains(sum / 2)
    }

    private def sumTreeValues(node: TreeNode, isRoot: Boolean, subTreeSums: scala.collection.mutable.Set[Int]): Int = {
        if (node == null) 0
        else {
            val sum = sumTreeValues(node.left, false, subTreeSums) + sumTreeValues(node.right, false, subTreeSums) + node.value
            if (!isRoot) subTreeSums += sum
            sum
        }
    }
}
```