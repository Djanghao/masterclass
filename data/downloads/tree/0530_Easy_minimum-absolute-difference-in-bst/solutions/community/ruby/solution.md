# Ruby one-liner

**Author:** DNNX
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/3195130/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/3195130/)

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
# @param {TreeNode} root
# @return {Integer}
def get_minimum_difference(root)
  root.inspect.scan(/=(\\d+)/).map{ |x,| x.to_i }.sort.each_cons(2).map { |x, y| y - x }.min
end
```