# Dart, BFS

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/5018919/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/5018919/)

---

# Code
```
class Solution {
  int maxLevelSum(TreeNode? root) {
    int maxLevel = 1, maxValues = root!.val, currentLevel = 1;
    List<TreeNode> row = [root];
    while (row.isNotEmpty) {
      currentLevel++;
      List<TreeNode> newRow = [];
      row.forEach(
          (node) => [node.left, node.right].nonNulls.forEach(newRow.add));
      
      if (newRow.isEmpty) break;
      var sumValues = newRow.fold(0, (value, node) => value + node.val);
      if (sumValues > maxValues) {
        maxValues = sumValues;
        maxLevel = currentLevel;
      }
      row = newRow;
    }
    return maxLevel;
  }
}
```