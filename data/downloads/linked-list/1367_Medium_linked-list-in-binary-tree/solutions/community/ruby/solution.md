# Ruby Code

**Author:** MJMTG
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748544/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5748544/)

---

```ruby
def is_sub_path(head, root)
    return false if root.nil?
    return true if dfs(head, root)
    return is_sub_path(head, root.left) || is_sub_path(head, root.right)
end

def dfs(head, root)
    return true if head.nil?
    return false if root.nil?
    return head.val == root.val && (dfs(head.next, root.left) || dfs(head.next, root.right))
end

```