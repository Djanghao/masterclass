# 🚀🗿Gigachad Dart Solution!! 💀😔Hard!! Time complexity: O(n)🥳🥳

**Author:** LTDigor
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3285745/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3285745/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {      
  var arr = <int>[];

  TreeNode? _sortedListToBSTHelper(int startIndex, int len) {
      // recursion exit
      if (len == 0) {
          return null;
      }
      
      var leftSubtree = _sortedListToBSTHelper(startIndex, len~/2);
      var rightSubtree = _sortedListToBSTHelper(startIndex + len ~/ 2 + 1, len~/2 - 1 + len%2);
      return new TreeNode(arr[startIndex + len ~/ 2], leftSubtree, rightSubtree);
  }

  TreeNode? sortedListToBST(ListNode? head) {
      var current = head;

      while (current != null) {
          arr.add(current.val);
          current = current.next;
      }

      return _sortedListToBSTHelper(0, arr.length);
  }
}
```