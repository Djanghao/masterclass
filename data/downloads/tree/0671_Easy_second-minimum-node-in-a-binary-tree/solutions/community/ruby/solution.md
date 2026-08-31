# Ruby 2-lines of code solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/5975021/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/5975021/)

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
```ruby []
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
def find_second_minimum_value(root, h = {})
  (run = -> nd { nd ? (h[nd.val] = 1 and run.(nd.left) or run.(nd.right)) : return }).call(root)  
  h.keys.sort![1] || -1
end
```