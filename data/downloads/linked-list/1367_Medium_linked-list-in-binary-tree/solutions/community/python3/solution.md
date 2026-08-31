# ✅✅✅SIMPLE AND EASY SOLUTION BEATS ALL✅✅✅USING JAVA AND PYTHON✅✅✅WITH EXPLANATION🔥🔥🔥

**Author:** user0517qU
**Votes:** 35
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748515/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748515/)

---

# PLEASE UPVOTE IF YOU FIND IT HELPFULL!!!!
# Intuition
The goal is to check if a linked list appears as a consecutive path in a binary tree. The path can start at any node in the tree, and we need to match the list values sequentially from that starting point. The linked list should follow the parent-child connections of the tree.

# Approach
1. Check for Subpath: We recursively traverse the binary tree, and for each node, we attempt to match the values of the linked list with the tree nodes.
2. Recursive Matching: A helper function (checkPath) compares the current linked list node with the tree node. If values match, it recursively checks the left and right child nodes for the next linked list value.
3. Tree Traversal: Another recursive function (isSubPath) calls checkPath at every node in the binary tree, ensuring we check for a possible subpath from any starting point in the tree.
# Complexity
- Time complexity: O(N\xD7M), where N is the number of nodes in the binary tree and M is the length of the linked list. For each tree node, we may perform up to M comparisons.
- Space complexity: O(H), where H is the height of the binary tree, due to the recursion stack during the traversal of the binary tree.

# Code
```java []
class Solution {
    public boolean isSubPath(ListNode head, TreeNode root) {
        if (root == null) return false;
        if (checkPath(head, root)) return true;
        return isSubPath(head, root.left) || isSubPath(head, root.right);
    }

    private boolean checkPath(ListNode head, TreeNode root) {
        if (head == null) return true;
        if (root == null || head.val != root.val) return false;
        return checkPath(head.next, root.left) || checkPath(head.next, root.right);
    }
}

```
```python3 []
class Solution:
    def isSubPath(self, head, root):
        def checkPath(head, root):
            if not head: return True
            if not root or head.val != root.val: return False
            return checkPath(head.next, root.left) or checkPath(head.next, root.right)

        if not root: return False
        if checkPath(head, root): return True
        return self.isSubPath(head, root.left) or self.isSubPath(head, root.right)

```