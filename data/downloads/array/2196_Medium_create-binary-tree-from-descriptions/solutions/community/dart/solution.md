# Approach beat 100% || using DART.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479409/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479409/)

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
  TreeNode? createBinaryTree(List<List<int>> descriptions) {
    Map<int, TreeNode> nodes = {};
  Set<int> children = {};

  for (var description in descriptions) {
    int parentValue = description[0];
    int childValue = description[1];
    bool isLeft = description[2] == 1;

    TreeNode parentNode = nodes.putIfAbsent(parentValue, () => TreeNode(parentValue));
    TreeNode childNode = nodes.putIfAbsent(childValue, () => TreeNode(childValue));

    if (isLeft) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }

    children.add(childValue);
  }

  // The root node is the one that is not a child of any node
  TreeNode? root;
  for (var description in descriptions) {
    int parentValue = description[0];
    if (!children.contains(parentValue)) {
      root = nodes[parentValue];
      break;
    }
  }

  return root;
  }
}
```