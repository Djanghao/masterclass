# Dart code

**Author:** Marat_Ramazanov
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/3977486/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/3977486/)

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
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
  int sumRootToLeaf(TreeNode? root) {
    return dfs(root, 0);
  }

  int dfs(TreeNode? node, int currentNumber ) {
    if(node == null) {
      return 0;
    }

    currentNumber = (currentNumber << 1) + node.val;

    if(node.left == null && node.right == null) {
      return currentNumber;
    }

    return dfs(node.left, currentNumber) + dfs(node.right, currentNumber);
  }
}
```