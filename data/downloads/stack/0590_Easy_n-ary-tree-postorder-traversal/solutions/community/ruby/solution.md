# Recursion solution

**Author:** caovanbi235
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/5691275/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/5691275/)

---

# Code
```ruby []
# Definition for a Node.
# class Node
#     attr_accessor :val, :children
#     def initialize(val)
#         @val = val
#         @children = []
#     end
# end

# @param {Node} root
# @return {List[int]}
def postorder(root)
  return [] unless root

  root.children.flat_map do |child|
    postorder(child)
  end + [root.val]
end
```