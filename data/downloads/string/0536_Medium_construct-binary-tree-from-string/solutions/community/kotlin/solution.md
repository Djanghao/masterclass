# Kotlin O(n) time O(h) space

**Author:** user1482VR
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/5540878/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/5540878/)

---

# Code
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

    fun str2tree(s: String): TreeNode? {
        if (s.length == 0) {
            return null
        }       

        return getNode(s, 0).first
    }

    private fun getNode(s: String, index: Int): Pair<TreeNode, Int> {
        var isNegative = s[index] == '-'

        var currentIndex = if (isNegative) (index + 1) else index

        var number = 0
        while (currentIndex <= s.length - 1 && getDigit(s[currentIndex]) != null) {
            number = number * 10 + getDigit(s[currentIndex])!!
            currentIndex += 1
        }

        val node = TreeNode(if (isNegative) -number else number)
        if (currentIndex > s.length - 1 || s[currentIndex] == ')') {
            return node to currentIndex
        }

        val (leftNode, leftIndex) = getNode(s, currentIndex + 1)       
        node.left = leftNode
        currentIndex = leftIndex + 1

        if (currentIndex > s.length - 1 || s[currentIndex] == ')') {
            return node to currentIndex
        }

        val (rightNode, rightIndex) = getNode(s, currentIndex + 1)       
        node.right = rightNode
        currentIndex = rightIndex + 1
        return node to currentIndex
    }

    private fun getDigit(char: Char): Int? = 
        if (char >= '0' && char <= '9') {
            char - '0'
        } else {
            null
        }
}
```