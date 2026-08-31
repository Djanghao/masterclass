# Ruby, recursive, beats 100% runtime & memory

**Author:** anthonyto
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/1934218/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/1934218/)

---

Beats 100% of all other Ruby solutions in both runtime and memory usage.

(This is actually due to lack of Ruby submissions to compare to lol but let's ignore that)

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
# @param {String} s
# @return {TreeNode}
def str2tree(s)
  helper(s, 0)[0]
end

def helper(s, idx)
  # base case, return empty node
  return [nil, idx] if idx == s.length
  
  # build the node
  ## get the value and update the index
  val, idx = get_number(s, idx)
  node = TreeNode.new(val)
  
  # set up left child
  if idx < s.length && s[idx] == '('
    node.left, idx = helper(s, idx+1)
  end
  
  # set up right child
  if node.left && idx < s.length && s[idx] == '('
    node.right, idx = helper(s, idx+1)
  end
  
  # return the node and next index
  ## update the index if its pointing to a closing parenth
  idx = (idx < s.length && s[idx] == ')') ? idx+1 : idx
  [node, idx]
end

def get_number(s, start_idx)
  end_idx = start_idx
  while s[end_idx] =~ /[0-9]|-/
    end_idx += 1
  end
  
  [s[start_idx..end_idx-1], end_idx]
end
```