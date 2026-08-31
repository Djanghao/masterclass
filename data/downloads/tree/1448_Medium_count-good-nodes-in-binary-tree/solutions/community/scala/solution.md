# Simple, fast recursive solution

**Author:** jazzdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/6059237/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/6059237/)

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
  def goodNodes(root: TreeNode): Int = {

    def recurse(node: TreeNode = root, max: Int = root.value): Int = {
      if node == null then 0
      else {
        val (newMax, addIfGood) = if node.value >= max then (node.value, 1) else (max, 0)
        recurse(node.left, newMax) + recurse(node.right, newMax) + addIfGood
      }
    }

    recurse()
  }
}
```