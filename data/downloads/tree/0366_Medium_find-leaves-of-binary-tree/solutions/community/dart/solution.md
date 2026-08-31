# Recursively find height

**Author:** Allicolyer
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/4142480/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/4142480/)

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
  List<List<int>> findLeaves(TreeNode? root) {
       List<List<int>> output = [];
       getHeight(root, output);
       return output;
  }
  
  int getHeight(TreeNode? treeNode, List<List<int>> output){
    if (treeNode == null) return -1;
    int leftHeight = getHeight(treeNode.left, output);
    int rightHeight = getHeight(treeNode.right, output);
    int currentHeight = max(leftHeight, rightHeight) + 1;
    // Build out solution
    if (output.length <= currentHeight){
      output.add([]);
    }
    output[currentHeight].add(treeNode.val);
    return currentHeight;
  }
}
```