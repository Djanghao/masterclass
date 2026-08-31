# simple solution in GO

**Author:** jecmenican
**Votes:** 0
**Link:** [https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/4764581/](https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/4764581/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a rope tree node.
 * type RopeTreeNode struct {
 * 	   len   int
 * 	   val   string
 * 	   left  *RopeTreeNode
 * 	   right *RopeTreeNode
 * }
 */
func getKthCharacter(root *RopeTreeNode, k int) byte {
var str string
traverse(root, &str)
    return (byte)(str[k - 1])
}

func traverse(root *RopeTreeNode, str *string) {
    if root == nil {
        return
    }

    if root.left == nil && root.right == nil{
        *str += root.val
    }

    traverse(root.left, str)
    traverse(root.right, str)
}
```