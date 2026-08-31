# Dart, BFS

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/5018865/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/5018865/)

---

# Code
```
class Solution {
  List<int> rightSideView(TreeNode? root) {
    if (root == null) return <int>[];
    List<int> answer = [root.val];
    List<TreeNode> row = [root];
    while (row.isNotEmpty) {
      List<TreeNode> newRow = [];
      row.forEach(
          (node) => [node.left, node.right].nonNulls.forEach(newRow.add));
      if (newRow.isNotEmpty) {
        answer.add(newRow.last.val);
      }
      row = newRow;
    }
    return answer;
  }
}
```