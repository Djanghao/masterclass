# [Dart] [Recursive] Unique Binary Search Trees II

**Author:** thanhsontruong
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/3866930/](https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/3866930/)

---



# Code
```
class Solution {
  List<TreeNode?> generateTrees(int n) {
    List<TreeNode?> generate(int l, int r) {
      List<TreeNode?> res = [];
      if (l > r) return [null];
      if (l == r) return [TreeNode(l, null, null)];

      for (var i = l; i <= r; i++) {
        List<TreeNode?> left = generate(l, i - 1);
        List<TreeNode?> right = generate(i + 1, r);
        for (var leftNode in left) {
          for (var rightNode in right) {
            res.add(TreeNode(i, leftNode, rightNode));
          }
        }
      }

      return res;
    }

    return generate(1, n);
  }
}

```