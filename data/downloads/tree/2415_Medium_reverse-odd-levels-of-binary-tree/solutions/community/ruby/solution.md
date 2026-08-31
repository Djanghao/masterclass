# Ruby Simple Solution

**Author:** gilbertsheng
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/4067644/](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/4067644/)

---

```ruby
# @param {TreeNode} root
# @return {TreeNode}
def reverse_odd_levels(root)
  traverse(root.left, root.right, true)
  root
end

def traverse(left, right, is_odd)
  return if left.nil?

  left.val, right.val = right.val, left.val if is_odd
  traverse(left.left, right.right, !is_odd)
  traverse(left.right, right.left, !is_odd)  
end
```