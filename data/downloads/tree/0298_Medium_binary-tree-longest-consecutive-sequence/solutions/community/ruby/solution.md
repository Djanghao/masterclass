# Ruby DFS

**Author:** emmamm05
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/2636715/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/2636715/)

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

Data = Struct.new(:last, :size)

def longest_consecutive(root)
  dfs(root, Data.new(nil, 0))
end

def dfs(root, state)
  return state.size if root.nil?
  
  next_state = (state.last == root.val - 1 ? Data.new(root.val, state.size + 1) : Data.new(root.val, 1))
  [state.size, dfs(root.left, next_state), dfs(root.right, next_state)].max
end
```