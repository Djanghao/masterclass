# DFS Kotlin Solution - O(n) time - O(n) space

**Author:** moopish
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/4954020/](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/4954020/)

---

# Approach
Simply go through all the nodes via a DFS method and place into lists for each odd level reached. We can then swap values with the those lists since they will be in order from left to right after we have searched the entire graph.

# Complexity
- Time complexity: $$O(n)$$
Goes through the entire tree once. Then iterates through only the odd leveled nodes.

- Space complexity: $$O(n)$$
The odd level nodes are stored in arrays, but the number of odd level nodes is directly proportional to the total number of nodes. This is also recursive so there are $$log_2n$$ calls on the stack at most but $$O(n+log_2n)=O(n)$$.

# Code
```
class Solution {
    fun reverseOddLevels(root: TreeNode?): TreeNode? {
        val oddLevelValues = ArrayList<ArrayList<TreeNode>>()
        reverseOddLevels(root, 0, oddLevelValues)

        for (level in oddLevelValues) {
            for (i in 0 until level.size / 2) {
                val temp = level[i].`val`
                level[i].`val` = level[level.size - i - 1].`val`
                level[level.size - i - 1].`val` = temp
            }
        }

        return root
    }

    private fun reverseOddLevels(
        root: TreeNode?, 
        level: Int, 
        oddLevelValues: ArrayList<ArrayList<TreeNode>>
    ) {
        if (root != null) {
            if (level and 1 == 1) {
                val currLevelIndex = level / 2

                if (oddLevelValues.size == currLevelIndex) 
                    oddLevelValues.add(ArrayList<TreeNode>())
                
                oddLevelValues[currLevelIndex].add(root)
            }

            reverseOddLevels(root.left, level + 1, oddLevelValues)
            reverseOddLevels(root.right, level + 1, oddLevelValues)
        }
    }
}
```