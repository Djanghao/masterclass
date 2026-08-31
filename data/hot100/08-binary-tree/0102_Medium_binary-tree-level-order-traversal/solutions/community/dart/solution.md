# Dart recursive solution

**Author:** Selger
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/4790009/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/4790009/)

---

# Intuition
Lets calculate the total tree depth. Then lets get values from every lvl recursevly (from 0 to maxDepth) and flatten the result. 

# Complexity
- Time complexity:
0(2^m) where m - is a tree depth

- Space complexity:
O(n)

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
  List<List<int>> levelOrder(TreeNode? root) {
    final List<List<int>> total = []; 
    final treeDepth = maxDepth(root);
    for(int i = 0; i < treeDepth; i++) {
        final lvlList = valuesForLvl(root, 0, i);
        total.add(lvlList);
    }
    return total;
  }

  List<int> valuesForLvl(TreeNode? root, int lvl, int targetLvl) {
      if(root == null) {
          return [];
      }
      if(lvl == targetLvl) {
          return [root.val];
      }  
      final List<int> lvlTotal = [];
      lvlTotal.addAll(valuesForLvl(root.left, 1 + lvl, targetLvl));
      lvlTotal.addAll(valuesForLvl(root.right, 1 + lvl, targetLvl));
      return lvlTotal;
  }

  int maxDepth(TreeNode? root) {
    if(root == null) {
        return 0;
    }
    return 1 + max(maxDepth(root.left), maxDepth(root.right));
  }
}
```