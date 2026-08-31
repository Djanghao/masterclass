# Simple recursive solution

**Author:** jazzdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/6059120/](https://leetcode.com/problems/leaf-similar-trees/solutions/6059120/)

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
```scala []
object Solution {
  def leafSimilar(root1: TreeNode, root2: TreeNode): Boolean = {

    def getLeaves(root: TreeNode): Seq[Int] = {
      if (root == null) Nil
      else if root.left == null && root.right == null then Seq(root.value)
      else getLeaves(root.left) ++ getLeaves(root.right)
    }

    getLeaves(root1) == getLeaves(root2)
  }
}
```