# [Ruby] stack

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/966669/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/966669/)

---

```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end

class BSTIterator
  def initialize(root)
    @stack = [root]
  end

  def next
    find_next
  end

  def has_next
    !@stack.empty?
  end
  
  private
  
  def find_next
    current = @stack.pop
    return current if current.is_a?(Integer)
    @stack += [current.right, current.val, current.left].compact
    find_next
  end
end
```