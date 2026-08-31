# go solution + dfs

**Author:** lainhdev
**Votes:** 5
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748580/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748580/)

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
```golang []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func dfs(head *ListNode, cur *ListNode, root *TreeNode) bool {
     // If we reach the end of the linked list, return true (successful match)
    if cur == nil {
        return true
    }

    // If we reach the end of a path in the tree without fully matching the list, return false
    if root == nil {
        return false
    }

    // Match the current tree node with the current linked list node
    // If no match, but the tree node matches the head of the linked list, start a new match
    // Otherwise, reset `cur` to `head` to attempt matching the linked list from scratch
    if cur.Val == root.Val {
        cur = cur.Next
    } else if head.Val == root.Val {
        head = head.Next
    } else {
        cur = head
    }

    // Continue DFS down both left and right children
    return dfs(head, cur, root.Left) || dfs(head, cur, root.Right)
}

func isSubPath(head *ListNode, root *TreeNode) bool {
    return dfs(head, head, root) // Start DFS search
}
```