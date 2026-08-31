# Dart DFS simple solution which beats 100%

**Author:** handzup
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5751644/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5751644/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(N\u2217M)$$

- Space complexity:
$$O(n)$$

# Code
```dart []
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
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
  bool isSubPath(ListNode? head, TreeNode? root) {
    if (head == null) return false;
    if (root == null) return false;

    return dfs(head, root) ||
        isSubPath(head, root.left) ||
        isSubPath(head, root.right);
  }

  bool dfs(ListNode? head, TreeNode? root) {
     if (head == null) return true;

    if (root == null || head.val != root.val) {
      return false;
    }

    return dfs(head.next, root.right) || dfs(head.next, root.left);
  }
}

```