# Dart solution - few lines

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/2883205/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/2883205/)

---

# Intuition
Simple DART solution with use of recursion.
Keep in mind - Dart language does not have builtin MAX_INT

# Approach
All is simple. 
Whenever we load child we have a max value defined from the above node.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N) - max depth of recursion

# Code
```

class Solution {
  int MAX_INT = pow(2, 63).toInt() - 1; // platform dependent
  int i = 0;
  late List<int> _preorder;

  TreeNode? loadNext(int maxVal) {
    if (i == _preorder.length || _preorder[i] > maxVal) return null;
    int val = _preorder[i++];
    return TreeNode(val, loadNext(val), loadNext(maxVal));
  }

  TreeNode? bstFromPreorder(List<int> preorder) {
    _preorder = preorder;
    i = 0;
    return loadNext(MAX_INT);
  }
}

```